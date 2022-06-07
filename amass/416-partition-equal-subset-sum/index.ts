/**
 * 动态规划
 * dp[i][j] 行(i)为 nums 列(j) 为 target(sum / 2)
 *             / dp[i - 1][j]
 * dp[i][j] = {  true,                   nums[i] === j
 *             \ dp[i - 1][j - nums[i]]  nums[i] < j
 * @desc 时间复杂度 O(nc) 空间复杂度 O(nc)
 * @param nums {number[]}
 * @returns {boolean}
 */
export function canPartition(nums: number[]): boolean {
  const n = nums.length;
  const sum: number = nums.reduce((v, p) => v + p, 0);
  if (sum % 2) {
    // 不能等分
    return false;
  }

  const target = sum / 2;
  const dp: boolean[][] = new Array(n)
    .fill(false)
    .map(() => new Array(target + 1));

  dp[0][nums[0]] = true;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j];

      if (nums[i] === j) {
        dp[i][j] = true;
        continue;
      }

      if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }
  }

  return dp[n - 1][target];
}

/**
 * 动态规划 - 空间优化
 * dp[i][j] 行(i)为 nums 列(j) 为 target(sum / 2)
 *             / dp[i - 1][j]
 * dp[i][j] = {  true,                   nums[i] === j
 *             \ dp[i - 1][j - nums[i]]  nums[i] < j
 * @desc 时间复杂度 O(nc) 空间复杂度 O(c)
 * @param nums {number[]}
 * @returns {boolean}
 */
export function canPartition2(nums: number[]): boolean {
  const n = nums.length;
  const sum: number = nums.reduce((v, p) => v + p, 0);
  if (sum % 2) {
    // 不能等分
    return false;
  }

  const target = sum / 2;
  const dp: boolean[] = new Array(target + 1).fill(false);

  dp[nums[0]] = true;

  for (let i = 1; i < n; i++) {
    for (let j = target; j >= 0; --j) {
      if (nums[i] === j) {
        dp[j] = true;
        continue;
      }

      if (nums[i] < j) {
        dp[j] = dp[j] || dp[j - nums[i]];
      }
    }
  }

  return dp[target];
}
