/**
 * 模拟
 * @desc 时间复杂度 O(nk) 空间复杂度 O(1)
 * @param grid {number[][]}
 * @param k {number[]}
 * @returns {number[][]}
 */
export function shiftGrid(grid: number[][], k: number): number[][] {
  const n: number = grid.length;
  const m: number = grid[0].length;
  while (k !== 0) {
    let migration: number | null;
    for (let i = 0; i < n; i++) {
      if (typeof migration == "number") {
        grid[i].unshift(migration);
        migration = null;
      }
      if (!migration) {
        migration = grid[i].pop();
      }
    }
    grid[0].unshift(migration);

    k--;
  }

  return grid;
}
