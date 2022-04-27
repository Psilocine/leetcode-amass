/**
 * 哈希表
 * @desc 时间复杂度 O((4^n)/sqrt(n)) 卡特兰数 空间复杂度 O((4^n)/sqrt(n))
 * @param n {number}
 * @returns {string[]}
 */
export function generateParenthesis(n: number): string[] {
  let set = new Set(["()"]);

  for (let c = 2; c <= n; c++) {
    let nextSet: Set<string> = new Set();
    for (const s of set) {
      for (let j = 0; j <= s.length; j++) {
        nextSet.add(s.slice(0, j) + "()" + s.slice(j));
      }
    }
    set = nextSet;
  }

  return [...set];
}

/**
 * DFS
 * @desc 时间复杂度 O((4^n)/sqrt(n)) 卡特兰数 空间复杂度 O(n)
 * @param n {number}
 * @returns {string[]}
 */
export function generateParenthesis2(n: number): string[] {
  const res = [];

  const dfs = (open, close, str) => {
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }
    if (open > 0) {
      dfs(open - 1, close, str + "(");
    }
    if (open < close) {
      dfs(open, close - 1, str + ")");
    }
  };

  dfs(n, n, "");

  return res;
}
