/**
 * 题目要求在原来的矩阵上修改
 * 先根据斜边做对称反转
 * [1,2,3]    [1,4,7]
 * [4,5,6] -> [2,5,8]
 * [7,8,9]    [3,6,9]
 *
 * 再每一行 reverse
 * [1,4,7]    [7,4,1]
 * [2,5,8] -> [8,5,2]
 * [3,6,9]    [9,6,3]
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(1)
 * @param matrix {number[][]}
 * @returns {void}
 */
export function rotate(matrix: number[][]): number[][] {
  // 先根据斜边做对称反转
  let len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 再每一行 reverse
  matrix.forEach((v) => v.reverse());

  return matrix;
}
