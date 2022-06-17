/**
 * 二分查找
 * @desc 时间复杂度 O(logn) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number}
 */
export function searchInsert(nums: number[], target: number): number {
  const n = nums.length;
  let l = 0,
    r = n - 1;

  // 找到 >= target 的位置
  while (l <= r) {
    const c = l + Math.floor((r - l) / 2);
    if (nums[c] < target) {
      l = c + 1;
    } else {
      r = c - 1;
    }
  }

  return l;
}
