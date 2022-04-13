const fs = require("fs");
const path = require("path");
const { log } = require("../utils/log");

const getPath = (p) => {
  return path.resolve(path.resolve(__dirname, "../../"), p);
};

const checkHasPath = (path) => {
  try {
    fs.accessSync(getPath(path), fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};

const createProject = (name) => {
  if (checkHasPath(`amass/${name}`)) {
    log("已存在该路径", "red");
    return;
  }
  fs.mkdirSync(`amass/${name}`);
  return true;
};

const updateReadMeMarkdown = (problems) => {
  let md = "# 题库目录";

  problems.forEach((problem) => {
    md += `\r\n\r\n[${problem.id}. ${problem.title.cn}](../../amass/${problem.title.en}/README.md)`;
  });
  const problemMarkdownPath = "./docs/PROBLEMS.md";
  fs.writeFileSync(getPath(problemMarkdownPath), md);
};

const updateDataJson = ({ cn, en, difficulty, url, id }) => {
  const data = fs.readFileSync("./assets/problems.json", "utf-8");
  const arr = JSON.parse(data);
  arr.push({
    id: Number(id),
    title: {
      cn,
      en,
    },
    difficulty,
    url,
    path: `../../amass/${en}/README.md`,
  });
  arr.sort((a, b) => a.id - b.id);

  fs.writeFileSync("./assets/problems.json", JSON.stringify(arr, null, 2));

  return arr;
};

const initEn = (en) => {
  return en.split("-").join(" ");
};

const getProjectName = ({ en, id }) => {
  return `${id}-${en.toLowerCase().split(" ").join("-")}`;
};

const getFunctionName = (en) => {
  const arr = en.split(" ");
  return arr.reduce((acc, cur, idx) => {
    return idx
      ? (acc += cur.slice(0, 1).toUpperCase() + cur.slice(1).toLowerCase())
      : (acc += cur.toLowerCase());
  }, "");
};

const generateProblemMarkdown = ({ cn, difficulty, url, id }) => {
  return `# ${id}. ${cn}\r\n\r\n> 难度：${difficulty}\r\n>\r\n> ${url}\r\n\r\n## 题目`;
};

const update = ({ cn, en, difficulty, url, id }) => {
  en = initEn(en);
  const projectPath = getProjectName({ en, id });
  if (createProject(projectPath)) {
    fs.writeFileSync(
      `amass/${projectPath}/index.ts`,
      `export function ${getFunctionName(en)}() {}`
    );
    fs.writeFileSync(
      `amass/${projectPath}/README.md`,
      generateProblemMarkdown({ cn, difficulty, url, id })
    );
    fs.writeFileSync(
      `amass/${projectPath}/${en}.spec.ts`,
      `import { describe, expect, it } from "vitest";

describe("${cn}", () => {});

function testCase(fn: unknown) {
  it.each([
    // test cases
  ])("示例%#", () => {
    expect(true).toBe(true);
  });
}
`
    );
    const problems = updateDataJson({
      cn,
      en: projectPath,
      difficulty,
      url,
      id,
    });
    updateReadMeMarkdown(problems);
  }
};

module.exports = update;
