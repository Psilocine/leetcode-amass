# 188. 买卖股票的最佳时机 IV

> 难度：困难
>
> https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/

## 题目

给定一个整数数组 `prices` ，它的第 `i` 个元素 `prices[i]` 是一支给定的股票在第 `i` 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 `k` 笔交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

**示例 1**

```
输入：k = 2, prices = [2,4,1]
输出：2
解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
```

**示例 2**

```
输入：k = 2, prices = [3,2,6,5,0,3]
输出：7
解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
```

## 解答

```typescript
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
```
