# 64. 最小路径和

> 难度：中等
>
> https://leetcode-cn.com/problems/minimum-path-sum/

## 题目

给定一个包含非负整数的 `m x n` 网格 `grid` ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/167246809-626b3967-94c9-4d8a-b6a5-4173ad5dacdc.png)

```
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
```

**示例 2**

```
输入：grid = [[1,2,3],[4,5,6]]
输出：12
```

## 解答

```typescript
/**
 * 动态规划
 * dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1])
 * @desc 时间复杂度 O(mn) 空间复杂度 O(1)
 * @param grid {number[]][]}
 * @returns {number}
 */
export function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  // 计算第一列，只需和上一列的数值累加
  for (let i = 1; i < m; i++) {
    grid[i][0] = grid[i - 1][0] + grid[i][0];
  }

  // 计算第一行，只需和前一行的数值累加
  for (let j = 1; j < n; j++) {
    grid[0][j] = grid[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }
  }

  return grid[m - 1][n - 1];
}
```
