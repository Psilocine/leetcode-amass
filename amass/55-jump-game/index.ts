/**
 * 贪心
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {boolean}
 */
export function canJump(nums: number[]): boolean {
  let rightmost = 0;
  const n = nums.length

  for (let i = 0; i < n; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i]);
      if (rightmost >= n - 1) {
        return true;
      }
    }
  }

  return false;
};