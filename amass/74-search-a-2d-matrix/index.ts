/**
 * 二分查找
 * @desc 时间复杂度 O(lognm) 空间复杂度 O(1)
 * @param matrix {number[][]}
 * @param target {number}
 * @returns {boolean}
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  let l = 0,
    r = m - 1;
  // 确认在哪一行
  while (l <= r) {
    const c = l + Math.floor((r - l) / 2);
    if (matrix[c][0] === target) {
      return true;
    } else if (matrix[c][0] > target) {
      r = c - 1;
    } else {
      l = c + 1;
    }
  }
  // 超出矩阵范围
  if (r < 0 || r >= m) {
    return false;
  }
  const row = matrix[r];
  l = 0;
  r = n - 1;

  while (l <= r) {
    const c = l + Math.floor((r - l) / 2);
    if (row[c] === target) {
      return true;
    } else if (row[c] > target) {
      r = c - 1;
    } else {
      l = c + 1;
    }
  }

  return false;
}
