/**
 * 按外层模拟
 * @desc 时间复杂度 O(n ^ 2) 空间复杂度 O(1)
 * @param n {number}
 * @returns {number[][]}
 */
export function generateMatrix(n: number): number[][] {
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;

  let val: number = 1;
  const ans: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (top < bottom && left < right) {
    // top
    for (let i = left; i < right; i++) ans[top][i] = val++;
    // right
    for (let i = top; i < bottom; i++) ans[i][right] = val++;
    // bottom
    for (let i = right; i > left; i--) ans[bottom][i] = val++;
    // left
    for (let i = bottom; i > top; i--) ans[i][left] = val++;

    top++;
    right--;
    bottom--;
    left++;
  }

  if (top === bottom) {
    // 只剩一行
    for (let i = left; i <= right; i++) ans[top][i] = val++;
  } else if (left === right) {
    // 只剩一列
    for (let i = top; i <= bottom; i++) ans[i][right] = val++;
  }

  return ans;
}
