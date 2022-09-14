/**
 * 排序 + 遍历
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @returns {number}
 */
export function specialArray(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => b - a);

  for (let i = 1; i <= n; i++) {
    if (nums[i - 1] >= i && (i === n || nums[i] < i)) {
      return i;
    }
  }
  return -1;
}
