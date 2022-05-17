/**
 * 动态规划
 * dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
 * @desc 时间复杂度 O(mn) 空间复杂度 O(mn) mn 为行数列数
 * @param matrix {string[][]}
 * @returns {number}
 */
export function maximalSquare(matrix: string[][]): number {
  const row = matrix.length;
  const col = matrix[0].length;
  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0));

  let maxLen = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === "0") continue;

      dp[i][j] =
        Math.min(
          dp[i - 1]?.[j] || 0,
          dp[i - 1]?.[j - 1] || 0,
          dp[i][j - 1] || 0
        ) + 1;

      maxLen = Math.max(maxLen, dp[i][j]);
    }
  }

  return maxLen ** 2;
}
