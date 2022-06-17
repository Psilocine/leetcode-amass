/**
 * 二分查找
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {boolean}
 */
export function search(nums: number[], target: number): boolean {
  const n = nums.length;

  let l = 0,
    r = n - 1;

  while (l <= r) {
    const c = l + Math.floor((r - l) / 2);
    if (nums[c] === target) {
      return true;
    }
    if (nums[l] === nums[c] && nums[r] === nums[c]) {
      l++;
      r--;
    } else if (nums[l] <= nums[c]) {
      // [l, c] 升序
      if (nums[l] <= target && target < nums[c]) {
        r = c - 1;
      } else {
        l = c + 1;
      }
    } else {
      // [c, r] 升序
      if (nums[c] < target && target <= nums[n - 1]) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
  }
  return false;
}
