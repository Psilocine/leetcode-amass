/**
 * 排序 + 遍历
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function minSubsequence(nums: number[]): number[] {
  nums.sort((a, b) => b - a);
  const sum: number = nums.reduce((v, p) => v + p, 0);
  let ansSum: number = 0;
  let endIdx: number = 0;

  for (let i = 0; i < nums.length; i++) {
    ansSum += nums[i];
    endIdx = i;

    // 大于则跳出循环
    if (ansSum > sum - ansSum) {
      break;
    }
  }

  // 注意需要 + 1
  return nums.slice(0, endIdx + 1);
}
