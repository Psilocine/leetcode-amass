/**
 * 暴力破解法
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number}
 */
export function search(nums: number[], target: number): number {
  let res = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res = i;
      break;
    }
  }

  return res;
}

/**
 * 二分法
 * @desc 时间复杂度 O(logn) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number}
 */
export function search2(nums: number[], target: number): number {
  let len = nums.length;
  if (len === 0) {
    return -1;
  }
  if (len === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let l = 0,
    r = len - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[0] <= nums[mid]) {
      // 左边升序
      if (nums[0] <= target && target > nums[mid]) {
        // target 在升序区间
        r = mid - 1;
      } else {
        l = mid + 1
      }
    } else {
      // 右边升序
      if (nums[mid] < target && target <= nums[len - 1]) {
        // target 在升序区间
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
}
