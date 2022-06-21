/**
 * 动态规划
 * @desc 时间复杂度 O(numRows ^ 2)空间复杂度 O(1)
 * @param numRows {number}
 * @returns {number[][]}
 */
export function generate(numRows: number): number[][] {
  if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return [[1], [1, 1]];
  }

  // 由于下一行需要依赖上一行，把所有的值都先赋值为 1
  const ans: number[][] = new Array(numRows)
    .fill(0)
    .map((_, i) => new Array(i + 1).fill(1));

  for (let i = 2; i < numRows; i++) {
    const len = ans[i].length;

    // 头尾为 1，无需参与
    for (let j = 1; j < len - 1; j++) {
      ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
  }

  return ans;
}
