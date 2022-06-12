/**
 * 动态规划
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {number}
 */
export function longestValidParentheses(s: string): number {
  const dp: number[] = new Array(s.length + 1).fill(0);
  let ans: number = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ")") {
      if (s[i - 1] === "(") {
        dp[i] = 2;
        if (i - 2 >= 0) {
          dp[i] = dp[i - 2] + 2;
        }
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
        if (i - dp[i - 1] - 2 >= 0) {
          dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
        } else {
          dp[i] = dp[i - 1] + 2;
        }
      }
    }
    ans = Math.max(ans, dp[i])
  }

  return ans;
}
