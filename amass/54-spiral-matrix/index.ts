/**
 * 按外层模拟
 * @desc 时间复杂度 O(mn) 空间复杂度 O(1)
 * @param matrix {number[][]}
 * @returns {number[]}
 */
export function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  if (m === 0) {
    return []
  }
  const n = matrix[0].length;
  const ans: number[] = [];

  let left = 0, right = n - 1, top = 0, bottom = m - 1;

  while (top < bottom && left < right) {
    // top
    for (let i = left; i < right; i++) ans.push(matrix[top][i]);
    // right
    for (let i = top; i < bottom; i++) ans.push(matrix[i][right]);
    // bottom
    for (let i = right; i > left; i--) ans.push(matrix[bottom][i]);
    // left
    for (let i = bottom; i > top; i--) ans.push(matrix[i][left]);

    top++;
    right--;
    bottom--;
    left++;
  }

  if (top === bottom) {
    // 只剩一行
    for (let i = left; i <= right; i++) ans.push(matrix[top][i]);
  } else if (left === right) {
    // 只剩一列
    for (let i = top; i <= bottom; i++) ans.push(matrix[i][right]);
  }

  return ans;
}
