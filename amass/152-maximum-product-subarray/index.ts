/**
 * 动态规划
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function maxProduct(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let max = nums[0];
  let imax = nums[0];
  let imin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let mx = imax;
    let mn = imin;
    imax = Math.max(mx * nums[i], Math.max(mn * nums[i], nums[i]));
    imin = Math.min(mn * nums[i], Math.min(mx * nums[i], nums[i]));

    max = Math.max(max, imax);
  }

  return max;
}
