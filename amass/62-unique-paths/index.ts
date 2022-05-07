/**
 * 动态规划
 * dp[i, j] = dp[i - 1, j] + dp[i, j - 1]
 * dp[i, j] 的路线等于 dp[i - 1, j] 的路线 + dp[i, j - 1] 的路线
 * @desc 时间复杂度 O(mn) 空间复杂度 O(mn)
 * @param m {number}
 * @param n {number}
 */
export function uniquePaths(m: number, n: number): number {
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0));

  // 把 dp[i][0] 填充为 1
  for (let i = 0; i < m; i++) {
    f[i][0] = 1;
  }
  // 把 dp[0][j] 填充为 1
  for (let j = 0; j < n; j++) {
    f[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1];
    }
  }

  return f[m - 1][n - 1];
}
