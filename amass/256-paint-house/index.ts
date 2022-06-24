/**
 * 动态规划
 * @desc 时间复杂度 O(n) 空间复杂度 O(3n) = O(n)
 * @param costs {number[][]}
 * @returns {number}
 */
export function minCost(costs: number[][]): number {
  const n: number = costs.length;

  // dp[i][0|1|2]
  const dp: number[][] = new Array(n + 1)
    .fill(0)
    .map(() => new Array(3).fill(0));

  for (let i = 1; i <= n; i++) {
    // 当前房子的颜色不能与上一个房子的颜色相同
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i - 1][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i - 1][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i - 1][2];
  }

  return Math.min(...dp[n]);
}

/**
 * 动态规划 - 空间优化
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param costs {number[][]}
 * @returns {number}
 */
export function minCost2(costs: number[][]): number {
  const n: number = costs.length;

  // dp[0|1|2]
  let dp: number[] = new Array(3).fill(0);

  for (let i = 0; i < n; i++) {
    let newDp = new Array(3).fill(0);
    for (let j = 0; j < 3; j++) {
      newDp[j] = Math.min(dp[(j + 1) % 3], dp[(j + 2) % 3]) + costs[i][j];
    }

    dp = newDp;
  }

  return Math.min(...dp);
}
