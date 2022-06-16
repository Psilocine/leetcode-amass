/**
 * 排序 + 遍历
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @returns {boolean}
 */
export function containsDuplicate(nums: number[]): boolean {
  nums.sort((a, b) => a - b); // logn

  for (let i = 1; i < nums.length; i++) {
    // n
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }

  return false;
}

/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {boolean}
 */
export function containsDuplicate2(nums: number[]): boolean {
  const map: Set<number> = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }

    map.add(nums[i]);
  }

  return false;
}
