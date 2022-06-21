/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function removeDuplicates(nums: number[]): number {
  const set = new Set();
  const n = nums.length;
  for (let i = n; i >= 0; --i) {
    if (set.has(nums[i])) {
      nums.splice(i, 1);
    } else {
      set.add(nums[i]);
    }
  }

  return nums.length;
}

/**
 * 快慢指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function removeDuplicates2(nums: number[]): number {
  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    } else {
      nums[j] = nums[i];
      j++;
    }
  }
  nums.length = j;
  return j;
}
