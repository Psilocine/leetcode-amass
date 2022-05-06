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
