# 200. 岛屿数量

> 难度：中等
>
> https://leetcode-cn.com/problems/number-of-islands/

## 题目

给你一个由 `'1'`（陆地）和 `'0'`（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

**示例 1**

```
输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
```

**示例 2**

```
输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3
```

**提示：**

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 300
- grid[i][j] 的值为 '0' 或 '1'

## 解答

```typescript
/**
 * dfs
 * @desc 时间复杂度 O(m * n) 空间复杂度 O(m * n) mn 为行数列数
 * @param grid {string[][]}
 * @returns {number}
 */
export function numIslands(grid: string[][]): number {
  let num = 0;
  const dfs = (row, col, rows, cols) => {
    // 处理边界问题
    if (row < 0 || col >= cols || row >= rows || col < 0) {
      return;
    }
    // 0 / 2 不再遍历
    if (grid[row][col] !== "1") {
      return;
    }
    grid[row][col] = "2";
    dfs(row - 1, col, rows, cols);
    dfs(row + 1, col, rows, cols);
    dfs(row, col - 1, rows, cols);
    dfs(row, col + 1, rows, cols);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // 找到岛屿，并扩散寻找周围相邻 land
      if (grid[i][j] === "1") {
        num++;
        dfs(i, j, grid.length, grid[i].length);
      }
    }
  }

  return num;
}
```
