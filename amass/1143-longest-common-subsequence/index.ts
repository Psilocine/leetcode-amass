/**
 * 动态规划
 * dp[i][j] = dp[i - 1][j - 1] + 1 (s[i - 1] = s[j - 1])
 * dp[i][j] = Math.max(dp[i][j - 1], dp[i- 1][j]) (s[i - 1] !== [s[j - 1]])
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param text1 {string}
 * @param text2 {string}
 * @returns {number}
 */
export function longestCommonSubsequence(text1: string, text2: string): number {
  const n1 = text1.length;
  const n2 = text2.length;

  const dp: number[][] = new Array(n1 + 1)
    .fill(0)
    .map(() => new Array(n2 + 1).fill(0));

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[n1][n2];
}
