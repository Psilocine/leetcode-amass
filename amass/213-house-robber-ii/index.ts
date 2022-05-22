/**
 * 动态规划
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function rob(nums: number[]): number {
  // 不偷第一间
  // 不透最后一间
  const n = nums.length;
  if (n === 1) {
    return nums[0];
  } else if (n === 2) {
    return Math.max(nums[0], nums[1]);
  }
  return Math.max(robRange(nums, 0, n - 2), robRange(nums, 1, n - 1));
}

function robRange(nums: number[], start: number, end: number) {
  let first = nums[start],
    second = Math.max(nums[start], nums[start + 1]);

  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }

  return second;
}
