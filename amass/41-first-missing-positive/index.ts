/**
 * 哈希表 不符合题意
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function firstMissingPositive(nums: number[]): number {
  let ans: number = 1;
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
    while (set.has(ans)) {
      ++ans;
    }
  }

  return ans;
}

/**
 * 原地哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function firstMissingPositive2(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}
