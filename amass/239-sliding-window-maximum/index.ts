/**
 * 单调队列
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @param k {number}
 * @returns {number[]}
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  if (nums.length < 2) return nums;

  const ans: number[] = new Array(nums.length - k + 1).fill(0);

  const queue = [];

  for (let i = 0; i < nums.length; i++) {
    // 球队清理
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    // 尾部入列
    queue.push(i);
    // 头部出列
    while (queue[0] <= i - k) {
      queue.shift();
    }

    if (i - k + 1 >= 0) ans[i - k + 1] = nums[queue[0]];
  }

  return ans;
}
