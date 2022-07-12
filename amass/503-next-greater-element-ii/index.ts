/**
 * 单调栈
 * 把两个 nums 拼接在一起
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function nextGreaterElements(nums: number[]): number[] {
  const n: number = nums.length;

  const ans: number[] = new Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < n * 2 - 1; i++) {
    while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      ans[index] = nums[i % n];
    }
    stack.push(i % n);
  }

  return ans;
}
