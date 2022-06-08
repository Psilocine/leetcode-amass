# 121. 买卖股票的最佳时机

> 难度：简单
>
> https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

## 题目

给定一个数组 `prices` ，它的第 `i` 个元素 `prices[i]` 表示一支给定股票第 `i` 天的价格。

你只能选择 **某一天** 买入这只股票，并选择在 **未来的某一个不同的日子** 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 `0` 。

**示例 1**

```
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
```

**示例 2**

```
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
```

## 解答

```typescript
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
```
