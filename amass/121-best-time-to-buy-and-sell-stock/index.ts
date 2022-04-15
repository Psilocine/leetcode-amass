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
