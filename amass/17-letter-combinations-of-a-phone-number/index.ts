const map = new Map([
  ["0", ""],
  ["1", ""],
  ["2", "abc"],
  ["3", "def"],
  ["4", "ghi"],
  ["5", "jkl"],
  ["6", "mno"],
  ["7", "pqrs"],
  ["8", "tuv"],
  ["9", "wxyz"],
]);

/**
 * 深度优先搜索 DFS
 * 递归
 * @desc 时间复杂度 O(3^m * 4^n) 空间复杂度 O(m + n)
 * @param digits {string}
 * @returns {string[]}
 */
export function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const res: string[] = [];

  const dfs = (curStr: string, i: number) => {
    if (i > digits.length - 1) {
      res.push(curStr);
      return;
    }

    const letters = map.get(digits[i]);
    for (const letter of letters) {
      dfs(curStr + letter, i + 1);
    }
  };

  dfs("", 0);

  return res;
}

/**
 * 广度优先搜索 BFS
 * @desc 时间复杂度 O(3^m * 4^n) 空间复杂度 O(m + n)
 * @param digits {string}
 * @returns {string[]}
 */
export function letterCombinations2(digits: string): string[] {
  if (!digits.length) return [];
  const res: string[] = [];

  const queue = [""];

  while (queue.length) {
    const str = queue.shift();
    const len = str.length;
    if (len === digits.length) {
      res.push(str);
    } else {
      const digitMap = map.get(digits.slice(len, len + 1));

      for (let key of digitMap) {
        queue.push(str + key);
      }
    }
  }
  return res;
}
