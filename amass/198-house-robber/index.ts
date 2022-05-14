/**
 * 动态规划
 * dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns { number }
 */
export function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 1) return nums[0];

  const dp = [nums[0], Math.max(nums[1], nums[0])];

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[n - 1];
}
