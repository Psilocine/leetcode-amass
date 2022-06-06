/**
 * 双指针
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(1)
 * @param nums {numer[]}
 * @returns {number[][]}
 */
export function threeSum(nums: number[]): number[][] {
  const len = nums.length;
  if (nums.length < 3) return [];

  let ans = [];

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break; // 一定大于 0
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重

    let L = i + 1;
    let R = len - 1;

    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        ans.push(nums[i] + nums[L] + nums[R]);
        while (L < R && nums[L] === nums[L + 1]) L++;
        while (L < R && nums[R] === nums[R - 1]) R--;
        L++;
        R--;
      } else if (sum > 0) {
        R--;
      } else {
        L++;
      }
    }
  }
  return ans;
}
