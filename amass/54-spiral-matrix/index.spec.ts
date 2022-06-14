import { describe, expect, it } from "vitest";
import { spiralOrder } from ".";

describe("螺旋矩阵", () => {
  describe("按外层模拟", () => {
    testCase(spiralOrder);
  });
});

function testCase(fn: (matrix: number[][]) => number[]) {
  it.each([
    // test cases
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [1, 2, 3, 6, 9, 8, 7, 4, 5],
    ],
    [
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ],
      [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    ],
  ])("示例%#", (matrix, expected) => {
    expect(fn(matrix)).toEqual(expected);
  });
}
