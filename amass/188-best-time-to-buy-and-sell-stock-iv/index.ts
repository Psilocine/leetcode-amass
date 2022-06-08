/**
 * 动态规划
 * @desc 时间复杂度 O(n*min(n,k)) 空间复杂度 O(n*min(n,k))
 * @param k {number}
 * @param prices {number[]}
 * @return {number}
 */
export function maxProfit(k: number, prices: number[]): number {
  const n = prices.length;
  if (n == 0) {
    return 0;
  }
  const dp: number[][][] = new Array(n)
    .fill(0)
    .map(() => new Array(k + 1).fill(0).map(() => new Array(2).fill(0)));
  for (let i = 0; i < n; i++) {
    for (let j = k; j >= 1; j--) {
      if (i === 0) {
        dp[0][j][0] = 0;
        dp[0][j][1] = -prices[0];
      } else {
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
        dp[i][j][1] = Math.max(
          dp[i - 1][j][1],
          dp[i - 1][j - 1][0] - prices[i]
        );
      }
    }
  }

  return dp[n - 1][k][0];
}
