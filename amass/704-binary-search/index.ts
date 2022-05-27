/**
 * 二分查找
 * @desc 时间复杂度 O(logn) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number}
 */
export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  // 左闭右闭
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      // 比 mid 大，在右区间
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    }
  }

  return -1;
}
