/**
 * 单调栈
 * @desc
 * @param heights {number[]}
 * @returns {number}
 */
export function largestRectangleArea(heights: number[]): number {
  const stack = [];
  heights = [-1, ...heights, -1];
  let area: number = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const idx = stack.pop();
      area = Math.max(area, heights[idx] * (i - stack[stack.length - 1] - 1));
    }

    stack.push(i);
  }

  return area;
}
