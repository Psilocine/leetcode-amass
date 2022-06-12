# 10. 正则表达式匹配

> 难度：困难
>
> https://leetcode.cn/problems/regular-expression-matching/

## 题目

给你一个字符串  s  和一个字符规律  p，请你来实现一个支持 '.'  和  '\*'  的正则表达式匹配。

- '.' 匹配任意单个字符
- '\*' 匹配零个或多个前面的那一个元素

所谓匹配，是要涵盖   整个   字符串  s 的，而不是部分字符串。

**示例 1**

```
输入：s = "aa", p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。
```

**示例 2**

```
输入：s = "aa", p = "a*"
输出：true
解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
```

**示例  3**

```
输入：s = "ab", p = ".*"
输出：true
解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
```

提示：

- 1 <= s.length <= 20
- 1 <= p.length <= 30
- s  只包含从  a-z  的小写字母。
- p  只包含从  a-z  的小写字母，以及字符  .  和  \*。
- 保证每次出现字符  \* 时，前面都匹配到有效的字符

## 解答

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(mn) 空间复杂度 O(mn)
 * @param s {string}
 * @param p {string}
 * @returns {boolean}
 */
export function isMatch(s: string, p: string): boolean {
  const m = s.length;
  const n = p.length;

  const matches = (i: number, j: number): boolean => {
    if (i === 0) {
      return false;
    }
    if (p[j - 1] === ".") {
      return true;
    }

    return s[i - 1] === p[j - 1];
  };

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false));

  dp[0][0] = true;

  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] |= dp[i][j - 2];
        if (matches(i, j - 1)) {
          dp[i][j] |= dp[i - 1][j];
        }
      } else {
        if (matches(i, j)) {
          dp[i][j] |= dp[i - 1][j - 1];
        }
      }
    }
  }

  return !!dp[m][n];
}
```
