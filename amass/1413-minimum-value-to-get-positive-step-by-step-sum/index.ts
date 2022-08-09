/**
 * 前缀表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function minStartValue(nums: number[]): number {
  // 前缀和哈希表
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  const min = Math.min(...prefix);

  return Math.abs(min - 1);
}
/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function minStartValue2(nums: number[]): number {
  // 简单模拟
  const n = nums.length;
  let sum = 0,
    min = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    min = Math.min(sum, min);
  }

  return -min + 1;
}
