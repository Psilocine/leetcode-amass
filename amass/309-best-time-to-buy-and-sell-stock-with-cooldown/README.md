# 309. 最佳买卖股票时机含冷冻期

> 难度：中等
>
> https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/

## 题目

给定一个整数数组 `prices` ，其中第 `prices[i]` 表示第 `i` 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

- 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

**示例 1**

```
输入: prices = [1,2,3,0,2]
输出: 3
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
```

**示例 2**

```
输入: prices = [1]
输出: 0
```

## 解答

```typescript
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
```
