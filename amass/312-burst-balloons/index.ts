/**
 * 动态规划
 * dp[i][j] = max(dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j])
 * @desc 时间复杂度 O(n ^ 3) 空间复杂度 O(n ^ 2)
 * @param nums {number[]}
 * @returns {number}
 */
export function maxCoins(nums: number[]): number {
  let n = nums.length;
  // 添加两侧的虚拟气球
  let points = new Array(n + 2);
  points[0] = points[n + 1] = 1;
  for (let i = 1; i <= n; i++) {
    points[i] = nums[i - 1];
  }

  let dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));

  // i 从下往上
  for (let i = n; i >= 0; i--) {
    // j 从左往右
    for (let j = i + 1; j < n + 2; j++) {
      // 择优，最后一个气球 k
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k] + dp[k][j] + points[i] * points[j] * points[k]
        );
      }
    }
  }

  return dp[0][n + 1];
}
