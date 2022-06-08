/**
 * 动态规划
 * dp[i][k][0] = max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
 * dp[i][k][1] = max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
 *
 * @desc 时间复杂度 O(n) 空间复杂度 O(kn = n)
 * @param prices {number[]}
 * @return {number}
 */
export function maxProfit(prices: number[]): number {
  const n = prices.length;
  const max_k = 2;
  const dp: number[][][] = new Array(n)
    .fill(0)
    .map(() => new Array(max_k + 1).fill(0).map(() => new Array(2).fill(0)));

  for (let i = 0; i < n; i++) {
    for (let k = max_k; k >= 1; k--) {
      if (i === 0) {
        dp[0][k][0] = 0;
        dp[0][k][1] = -prices[0];
        continue;
      }

      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
    }
  }

  return dp[n - 1][max_k][0];
}

/**
 * 动态规划 - 空间优化
 * k 范围较小 可以把 k = 1 k = 2 列举出来
 * dp[i][2][0] = max(dp[i-1][2][0], dp[i-1][2][1] + prices[i])
 * dp[i][2][1] = max(dp[i-1][2][1], dp[i-1][1][0] - prices[i])
 * dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])
 * dp[i][1][1] = max(dp[i-1][1][1], -prices[i])
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param prices {number[]}
 * @return {number}
 */
export function maxProfit2(prices: number[]): number {
  const n = prices.length;

  let dpi20 = 0;
  let dpi21 = -prices[0];
  let dpi10 = 0;
  let dpi11 = -prices[0];

  for (let i = 0; i < n; i++) {
    dpi20 = Math.max(dpi20, dpi21 + prices[i]);
    dpi21 = Math.max(dpi21, dpi10 - prices[i]);
    dpi10 = Math.max(dpi10, dpi11 + prices[i]);
    dpi11 = Math.max(dpi11, -prices[i]);
  }

  return dpi20;
}
