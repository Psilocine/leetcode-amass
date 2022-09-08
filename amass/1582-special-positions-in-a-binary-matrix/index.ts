/**
 * 模拟
 * @desc 时间复杂度 O(m * n) 空间复杂度 O(m + n)
 * @param mat {number[][]}
 * @returns {number}
 */
export function numSpecial(mat: number[][]): number {
  const m: number = mat.length;
  const n: number = mat[0].length;
  const rowsSum: number[] = new Array(m).fill(0);
  const colsSum: number[] = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowsSum[i] += mat[i][j];
      colsSum[j] += mat[i][j];
    }
  }

  let ans: number = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] && rowsSum[i] === 1 && colsSum[j] === 1) {
        ans++;
      }
    }
  }

  return ans;
}
