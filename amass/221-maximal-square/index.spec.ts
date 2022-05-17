import { describe, expect, it } from "vitest";
import { maximalSquare } from ".";

describe("最大正方形", () => {
  describe("动态规划", () => {
    testCase(maximalSquare);
  });
});

function testCase(fn: (matrix: string[][]) => number) {
  it.each([
    // test cases
    [
      [
        ["0", "1"],
        ["1", "0"],
      ],
      1,
    ],
    [[["0"]], 0],
    [
      [
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"],
      ],
      4
    ],
  ])("示例%#", (matrix, expected) => {
    expect(fn(matrix)).toEqual(expected);
  });
}
