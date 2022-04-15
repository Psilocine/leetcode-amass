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
      const sellDay = prices[j]
      const profit = sellDay - buyDay
      if (benifit < profit) {
        benifit = profit;
      }
    }
    if (max < benifit) {
      max = benifit
    }
  }
  return max;
};

/**
 * 动态规划
 * 
 * 一边寻找更低的价格，一边再已经找到的低价基础上进行最大利润的计算，而且在一个prices[i]上只可能进行
 * 找到最低价格和得到最大利润(即最低价之后的最高价格)二者之中的一个，所以用两个分支即可完成
 * 
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param prices {number[]}
 * @return {number}
 */
export function maxProfit2(prices: number[]): number {
  let max = 0;
  let min = Number.MAX_VALUE
  for (let i = 0; i < prices.length; i++) {
    const currentDay = prices[i];
    if (min > currentDay) {
      min = currentDay
    } else if (currentDay - min > max) {
      max = currentDay - min;
    }
  }
  return max;
};
```
