import { describe, expect, it } from "vitest";
import { searchMatrix, searchMatrix2, searchMatrix3 } from ".";

describe("搜索二维矩阵 II", () => {
  describe("暴力破解", () => {
    testCase(searchMatrix);
  });
  describe("二分查找", () => {
    testCase(searchMatrix2);
  });
  describe("z 字形查找", () => {
    testCase(searchMatrix3);
  });
});

function testCase(fn: (matrix: number[][], target: number) => boolean) {
  it.each([
    // test cases
    [[[1, 1]], 1, true],
    [
      [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
      ],
      20,
      false,
    ],
    [
      [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
      ],
      5,
      true,
    ],
  ])("示例%#", (matrix, target, expected) => {
    expect(fn(matrix, target)).toBe(expected);
  });
}
