/**
 * 动态规划
 * dp[i] = dp[j] && check(s[j..i-1])
 * check(s[j..i-1]) 表示子串 s[j..i-1] 是否出现在字典中
 *
 * @desc 时间复杂度 O(n ^ 2) 空间复杂度 O(n) n 为 s 的长度
 * @param s {string}
 * @param wordDict {string[]}
 * @returns {boolean}
 */
export function wordBreak(s: string, wordDict: string[]): boolean {
  const n: number = s.length;
  const wordDictSet: Set<string> = new Set(wordDict);
  const dp: Array<boolean> = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}
