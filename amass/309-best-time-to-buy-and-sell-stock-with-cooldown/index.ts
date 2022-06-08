/**
 * 动态规划
 * dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i])
 * dp[i][1] = max(dp[i - 1][1], dp[i - 2][0] - prices[i])
 *
 * @desc 时间复杂度 O(n) 空间复杂度 O(kn = n)
 * @param prices {number[]}
 * @return {number}
 */
export function maxProfit(prices: number[]): number {
  const n = prices.length;

  const dp = new Array(n).fill(0).map(() => new Array(2).fill(0));

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      // base case
      dp[0][0] = 0;
      dp[0][1] = -prices[0];
    } else if (i === 1) {
      // base case
      dp[1][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
      dp[1][1] = Math.max(dp[i - 1][1], -prices[i]);
    } else {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
    }
  }

  return dp[n - 1][0];
}

/**
 * 动态规划 - 空间优化
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param prices {number[]}
 * @return {number}
 */
export function maxProfit2(prices: number[]): number {
  const n = prices.length;

  // 空间优化
  let dp0 = 0;
  let dp1 = -prices[0];
  let dp2 = 0;
  for (let i = 0; i < n; i++) {
    const temp = dp0;
    dp0 = Math.max(dp0, dp1 + prices[i]);
    dp1 = Math.max(dp1, dp2 - prices[i]);
    dp2 = temp;
  }

  return dp0;
}
