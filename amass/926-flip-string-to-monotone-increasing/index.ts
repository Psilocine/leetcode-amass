/**
 * 动态规划
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {number}
 */
export function minFlipsMonoIncr(s: string): number {
  const n = s.length;

  const dp: number[][] = new Array(n + 1)
    .fill(0)
    .map(() => new Array(2).fill(Infinity));

  dp[0][0] = 0;
  dp[0][1] = 0;

  for (let i = 0; i < n; i++) {
    dp[i + 1][0] = dp[i][0] + (s[i] === "1" ? 1 : 0);
    dp[i + 1][1] = Math.min(dp[i][0], dp[i][1]) + (s[i] === "1" ? 0 : 1);
  }
  return Math.min(dp[n][0], dp[n][1]);
}

/**
 * 动态规划 - 空间优化
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param s {string}
 * @returns {number}
 */
export function minFlipsMonoIncr2(s: string): number {
  const n = s.length;

  let dp0 = 0;
  let dp1 = 0;

  for (let i = 0; i < n; i++) {
    let temp = dp0;
    dp0 = dp0 + (s[i] === "1" ? 1 : 0);
    dp1 = Math.min(temp, dp1) + (s[i] === "1" ? 0 : 1);
  }
  return Math.min(dp0, dp1);
}
