/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param val {number}
 * @returns {number}
 */
export function removeElement(nums: number[], val: number): number {
  // 双指针
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  nums.length = j;
  return nums.length;
}
