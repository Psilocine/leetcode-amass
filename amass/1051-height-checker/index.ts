/**
 * 排序 + 遍历
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param heights {number[]}
 * @returns {number}
 */
export function heightChecker(heights: number[]): number {
  const correct: number[] = [...heights].sort((a, b) => a - b);
  let ans: number = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== correct[i]) ans++;
  }

  return ans;
}
