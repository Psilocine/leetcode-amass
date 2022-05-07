/**
 * 动态规划
 * dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1])
 * @desc 时间复杂度 O(mn) 空间复杂度 O(1)
 * @param grid {number[]][]}
 * @returns {number}
 */
export function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  // 计算第一列，只需和上一列的数值累加
  for (let i = 1; i < m; i++) {
    grid[i][0] = grid[i - 1][0] + grid[i][0];
  }

  // 计算第一行，只需和前一行的数值累加
  for (let j = 1; j < n; j++) {
    grid[0][j] = grid[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }
  }

  return grid[m - 1][n - 1];
}
