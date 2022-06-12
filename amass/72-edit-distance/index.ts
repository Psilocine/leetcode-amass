/**
 * 动态规划
 * @desc 时间复杂度 O(nm) 空间复杂度 O(nm)
 * @param word1 {string}
 * @param word2 {string}
 * @returns {number}
 */
export function minDistance(word1: string, word2: string): number {
  const n = word1.length;
  const m = word2.length;
  const dp: number[][] = new Array(n + 1)
    .fill(0)
    .map(() => new Array(m + 1).fill(0));

  // base case 当另一个单词不存在，次数就是单词长度（删除操作）
  for (let i = 1; i <= n; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= m; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[n][m];
}
