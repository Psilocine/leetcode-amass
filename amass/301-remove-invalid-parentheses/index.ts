/**
 * 回溯 dfs
 * @desc 时间复杂度 O(n * 2^n) 空间复杂度 O(n^2)
 * @param s {string}
 * @returns {string[]}
 */
export function removeInvalidParentheses(s: string): string[] {
  const ans: string[] = [];
  let lremove = 0;
  let rremove = 0;

  for (const c of s) {
    if (c === "(") {
      lremove++;
    } else if (c === ")") {
      if (lremove === 0) {
        rremove++;
      } else {
        lremove--;
      }
    }
  }

  const backtrack = (
    str: string,
    start: number,
    lremove: number,
    rremove: number
  ) => {
    if (lremove === 0 && rremove === 0) {
      if (isValid(str)) {
        ans.push(str);
      }
      return;
    }

    for (let i = start; i < str.length; i++) {
      if (i > start && str[i] === str[i - 1]) {
        continue;
      }
      // 如果剩余的字符无法满足去掉的数量要求
      if (lremove + rremove > str.length - i) {
        return;
      }

      // 尝试去掉一个左括号
      if (lremove > 0 && str[i] === "(") {
        backtrack(str.slice(0, i) + str.slice(i + 1), i, lremove - 1, rremove);
      }
      // 尝试去掉一个右括号
      if (rremove > 0 && str[i] === ")") {
        backtrack(str.slice(0, i) + str.slice(i + 1), i, lremove, rremove - 1);
      }
    }
  };

  backtrack(s, 0, lremove, rremove);

  return ans;
}
function isValid(str: string): boolean {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      cnt++;
    } else if (str[i] === ")") {
      cnt--;
      if (cnt < 0) {
        return false;
      }
    }
  }

  return true;
}
