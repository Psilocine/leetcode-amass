import { describe, expect, it } from "vitest";
import { maximalRectangle } from ".";

describe("最大矩形", () => {
  describe("maximalRectangle", () => {
    testCase(maximalRectangle);
  });
});

function testCase(fn: (matrix: string[][]) => number) {
  it.each([
    // test cases
    [
      [
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"],
      ],
      6,
    ],
    [[], 0],
    [[["0"]], 0],
    [[["1"]], 1],
    [[["0", "0"]], 0],
  ])("示例%#", (matrix, expected) => {
    expect(fn(matrix)).toBe(expected);
  });
}
