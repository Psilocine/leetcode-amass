/**
 * 模拟 + 遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param n {number}
 * @returns {number[]}
 */
export function shuffle(nums: number[], n: number): number[] {
  for (let i: number = n; i > 0; i--) {
    const y: number = nums.pop();
    nums.splice(i, 0, y);
  }

  return nums;
}
