# 62. 不同路径

> 难度：中等
>
> https://leetcode-cn.com/problems/unique-paths/

## 题目

一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/167242861-ee469e61-b523-46a2-8f77-d26a52db7ba0.png)

```
输入：m = 3, n = 7
输出：28
```

**示例 2**

```
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
```

**示例 3**

```
输入：m = 7, n = 3
输出：28
```

**示例 4**

```
输入：m = 3, n = 3
输出：6
```

**提示：**

- 1 <= m, n <= 100
- 题目数据保证答案小于等于 2 \* 109

## 解答

```typescript
/**
 * 动态规划
 * dp[i, j] = dp[i - 1, j] + dp[i, j - 1]
 * dp[i, j] 的路线等于 dp[i - 1, j] 的路线 + dp[i, j - 1] 的路线
 * @desc 时间复杂度 O(mn) 空间复杂度 O(mn)
 * @param m {number}
 * @param n {number}
 */
export function uniquePaths(m: number, n: number): number {
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0));

  // 把 dp[i][0] 填充为 1
  for (let i = 0; i < m; i++) {
    f[i][0] = 1;
  }
  // 把 dp[0][j] 填充为 1
  for (let j = 0; j < n; j++) {
    f[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1];
    }
  }

  return f[m - 1][n - 1];
}
```
