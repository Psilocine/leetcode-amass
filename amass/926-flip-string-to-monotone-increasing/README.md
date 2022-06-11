# 926. 将字符串翻转到单调递增

> 难度：中等
>
> https://leetcode.cn/problems/flip-string-to-monotone-increasing/

## 题目

如果一个二进制字符串，是以一些 0（可能没有 0）后面跟着一些 1（也可能没有 1）的形式组成的，那么该字符串是 单调递增 的。

给你一个二进制字符串 s，你可以将任何 0 翻转为 1 或者将 1 翻转为 0 。

返回使 s 单调递增的最小翻转次数。

**示例 1**

```
输入：s = "00110"
输出：1
解释：翻转最后一位得到 00111.
```

**示例 2**

```
输入：s = "010110"
输出：2
解释：翻转得到 011111，或者是 000111。
```

**示例 3**

```
输入：s = "00011000"
输出：2
解释：翻转得到 00000000。
```

## 解答

```typescript
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
```
