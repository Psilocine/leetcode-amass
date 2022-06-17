/**
 * 二分查找
 * @desc 时间复杂度 O(logn) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function findMin(nums: number[]): number {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    let c = l + Math.floor((r - l) / 2);
    if (nums[c] > nums[r]) {
      l = c + 1;
    } else if (nums[c] < nums[r]) {
      r = c;
    } else {
      r--;
    }
  }

  return nums[l];
}
