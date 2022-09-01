/**
 * 单调栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param prices {number[]}
 * @returns {number[]}
 */
export function finalPrices(prices: number[]): number[] {
  // 单调 stack
  const stack = [];
  const n = prices.length;
  const ans: number[] = new Array(n).fill(0);

  // 最后一位一定没折扣
  // for (let i = 0, j = 1; i < n - 1; ++i, j = i + 1) {
  //     stack.push(prices[i])
  //     while (stack[stack.length - 1] < prices[j]) {
  //         j++;
  //     }
  //     if (j > n - 1) {
  //         ans[i] = stack.pop();
  //     } else {
  //         ans[i] = stack.pop() - prices[j];
  //     }
  // }

  // ans[n - 1] = prices[n - 1];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }

    ans[i] =
      stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
    stack.push(prices[i]);
  }

  return ans;
}
