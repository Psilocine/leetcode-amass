import { describe, expect, it } from "vitest";
import { generateMatrix } from ".";

describe("螺旋矩阵 II", () => {
  describe("按外层模拟", () => {
    testCase(generateMatrix);
  });
});

function testCase(fn: (n: number) => number[][]) {
  it.each([
    // test cases
    [
      3,
      [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
      ],
    ],
    [1, [[1]]],
  ])("示例%#", (n, expected) => {
    expect(fn(n)).toEqual(expected);
  });
}
