/**
 * 模拟
 * 对角线共 m + n - 1 条，奇数斜上遍历 偶数斜下遍历
 * @desc 时间复杂度 O(mn) 空间复杂度 O(1)
 * @param mat {number[][]}
 * @returns {number[]}
 */
export function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  if (m === 1) {
    return mat[0];
  }
  const n = mat[0].length;
  const ans: number[] = new Array(m * n).fill(0);
  let idx: number = 0;
  for (let i = 0; i < m + n - 1; i++) {
    // 奇数
    if (i % 2 === 1) {
      let x = i < n ? 0 : i - n + 1;
      let y = i < n ? i : n - 1;
      while (x < m && y >= 0) {
        ans[idx++] = mat[x][y];
        x++;
        y--;
      }
    } else {
      // 偶数
      let x = i < m ? i : m - 1;
      let y = i < m ? 0 : i - m + 1;
      while (x >= 0 && y < n) {
        ans[idx++] = mat[x][y];
        x--;
        y++;
      }
    }
  }

  return ans;
}
