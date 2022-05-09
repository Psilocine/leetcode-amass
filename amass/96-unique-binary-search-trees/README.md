# 96. 不同的二叉搜索树

> 难度：中等
>
> https://leetcode.cn/problems/unique-binary-search-trees/

## 题目

给你一个整数 `n` ，求恰由 `n` 个节点组成且节点值从 `1` 到 `n` 互不相同的 **二叉搜索树** 有多少种？返回满足题意的二叉搜索树的种数。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/167379548-ad772708-2619-46c2-a277-ca259c5e077d.png)

```
输入：n = 3
输出：5
```

**示例 2**

```
输入：n = 1
输出：1
```

## 解答

```typescript
/**
 * 动态规划
 * dp[0] = 1
 * dp[1] = 1
 * dp[2] = dp[0] * dp[1] + dp[1] * dp[0]
 * dp[3] = do[0] * dp[2] + dp[1] * dp[1] + dp[2] * dp[0]
 * @desc 时间复杂度 O(n ^ 2) 时间复杂度 O(n)
 * @param n {number}
 * @returns {number}
 */
export function numTrees(n: number): number {
  const dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= i - 1; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }

  return dp[n];
}
```
