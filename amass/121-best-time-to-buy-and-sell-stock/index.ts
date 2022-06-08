/**
 * 暴力破解
 *
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(1)
 * @param prices {number[]}
 * @return {number}
 */
export function maxProfit(prices: number[]): number {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    const buyDay = prices[i];
    let benifit = 0;
    for (let j = i + 1; j < prices.length; j++) {
      const sellDay = prices[j];
      const profit = sellDay - buyDay;
      if (benifit < profit) {
        benifit = profit;
      }
    }
    if (max < benifit) {
      max = benifit;
    }
  }
  return max;
}

/**
 * 动态规划
 * 状态i 天数
 * 状态j 买入/卖出
 * dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i])
 *                  休息                卖出
 * dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i])
 *                  休息                买入
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param prices {number[]}
 * @return {number}
 */
export function maxProfit2(prices: number[]): number {
  const n = prices.length;
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(2).fill(0));

  /**
   * dp[-1][0] = 0; // 第 i-1 天，利润为 0
   * dp[-1][1] = -Infinity; // 不可能持有
   * dp[][0] = 0;
   * dp[][1] = -Infintiy
   */
  // base case
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }
  return dp[n - 1][0];
}

/**
 * 动态规划 优化空间
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param prices {number[]}
 * @return {number}
 */
export function maxProfit3(prices: number[]): number {
  const n = prices.length;

  let dp0 = 0;
  let dp1 = -prices[0];

  for (let i = 1; i < n; i++) {
    dp0 = Math.max(dp0, dp1 + prices[i]);
    dp1 = Math.max(dp1, -prices[i]);
  }
  return dp0;
}
