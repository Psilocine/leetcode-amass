# 32. 最长有效括号

> 难度：困难
>
> https://leetcode.cn/problems/longest-valid-parentheses/

## 题目

给你一个只包含 '('  和 ')'  的字符串，找出最长有效（格式正确且连续）括号子串的长度。

**示例 1**

```
输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
```

**示例 2**

```
输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
```

**示例 3**

```
输入：s = ""
输出：0
```

提示：

- 0 <= s.length <= 3 \* 104
- s[i] 为 '(' 或 ')'

## 解答

```typescript
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
      } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === "(") {
        if (i - dp[i - 1] - 2 >= 0) {
          dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
        } else {
          dp[i] = dp[i - 1] + 2;
        }
      }
    }
    ans = Math.max(ans, dp[i]);
  }

  return ans;
}
```
