/**
 * 动态规划
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param prices {number[]}
 * @return {number}
 */
export function maxProfit(prices: number[]): number {
  const n = prices.length;

  const dp: number[][] = new Array(n).fill(0).map(() => new Array(2).fill(0));

  // base case
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[n - 1][0];
}

/**
 * 动态规划 优化空间
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param prices {number[]}
 * @return {number}
 */
export function maxProfit2(prices: number[]): number {
  const n = prices.length;

  // base case
  let dp0 = 0;
  let dp1 = -prices[0];

  for (let i = 1; i < n; i++) {
    dp0 = Math.max(dp0, dp1 + prices[i]);
    dp1 = Math.max(dp1, dp0 - prices[i]);
  }
  return dp0;
}
