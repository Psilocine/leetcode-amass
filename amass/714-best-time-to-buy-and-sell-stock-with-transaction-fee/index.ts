/**
 * 动态规划
 * dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - 2)
 * dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
 * @desc 时间复杂度 O(n) 空间复杂度 O(2n = n)
 * @param prices {number[]}
 * @return {number}
 */
export function maxProfit(prices: number[], fee: number): number {
  const n = prices.length;
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(2).fill(0));

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      // base case
      dp[0][0] = 0;
      dp[0][1] = -prices[0];
    } else {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
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
export function maxProfit2(prices: number[], fee: number): number {
  const n = prices.length;

  let dpi0 = 0;
  let dpi1 = -prices[0];

  for (let i = 0; i < n; i++) {
    dpi0 = Math.max(dpi0, dpi1 + prices[i] - fee);
    dpi1 = Math.max(dpi1, dpi0 - prices[i]);
  }

  return dpi0;
}
