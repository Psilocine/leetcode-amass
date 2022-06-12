/**
 * 动态规划
 * @desc 时间复杂度 O(mn) 空间复杂度 O(mn
 * @param s {string}
 * @param p {string}
 * @returns {boolean}
 */
export function isMatch(s: string, p: string): boolean {
  const m = s.length;
  const n = p.length;

  const matches = (i: number, j: number): boolean => {
    if (i === 0) {
      return false;
    }
    if (p[j - 1] === ".") {
      return true;
    }

    return s[i - 1] === p[j - 1];
  };

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false));

  dp[0][0] = true;

  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] |= dp[i][j - 2];
        if (matches(i, j - 1)) {
          dp[i][j] |= dp[i - 1][j];
        }
      } else {
        if (matches(i, j)) {
          dp[i][j] |= dp[i - 1][j - 1];
        }
      }
    }
  }

  return !!dp[m][n];
}
