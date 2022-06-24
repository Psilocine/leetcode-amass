/**
 * 贪心
 * 每次找到可到达的最远位置
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function jump(nums: number[]): number {
  const n = nums.length;
  let ans = 0;

  let steps = 0;
  let maxPos = 0;

  for (let i = 0; i < n - 1; i++) {
    maxPos = Math.max(maxPos, nums[i] + i);

    if (steps === i) {
      steps = maxPos;
      ans++;
    }
  }

  return ans;
}
