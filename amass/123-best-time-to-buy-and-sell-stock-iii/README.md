# 123. 买卖股票的最佳时机 III

> 难度：困难
>
> https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/

## 题目

给定一个数组，它的第 `i` 个元素是一支给定的股票在第 `i` 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 **两笔** 交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

**示例  1**

```
输入：prices = [3,3,5,0,0,3,1,4]
输出：6
解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
     随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
```

**示例 2：**

```
输入：prices = [1,2,3,4,5]
输出：4
解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。  
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。  
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
```

**示例 3**

```
输入：prices = [7,6,4,3,1]
输出：0
解释：在这个情况下, 没有交易完成, 所以最大利润为 0。
```

**示例 4**

```
输入：prices = [1]
输出：0
```

## 解答

```typescript
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
```
