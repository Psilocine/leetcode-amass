/**
 * 动态规划
 * dp[0] = 1
 * dp[1] = 1
 * dp[2] = dp[0] * dp[1] + dp[1] * dp[0]
 * dp[3] = do[0] * dp[2] + dp[1] * dp[1] + dp[2] * dp[0]
 * @desc 时间复杂度 O(n ^ 2) 时间复杂度 O(n)
 * @param n {number}
 * @returns {number}
 */
export function numTrees(n: number): number {
  const dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= i - 1; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }

  return dp[n];
}
