import { largestRectangleArea } from "../84-largest-rectangle-in-histogram";

/**
 * 单调栈
 * @desc 时间复杂度 O(mn) 空间复杂度 O(mn)
 * @param matrix {string[][]}
 * @returns {number}
 */
export function maximalRectangle(matrix: string[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }
  let heights = new Array(matrix[0].length).fill(0);
  let maxArea = 0;
  for (const row of matrix) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === "0") {
        heights[i] = 0;
      } else {
        heights[i]++;
      }
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
}
