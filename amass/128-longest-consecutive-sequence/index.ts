/**
 * 去重 + 排序
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;

  nums = [...new Set(nums)];
  nums.sort((a, b) => a - b);

  let max = 1;
  let i = 1;

  while (i < nums.length) {
    let _max = 1;
    while (nums[i] === nums[i - 1] + 1) {
      _max++;
      i++;
    }
    i++;
    max = Math.max(max, _max);
  }

  return max;
}
