import { describe, expect, it } from "vitest";
import { heightChecker } from ".";

describe("高度检查器", () => {
  describe("遍历", () => {
    testCase(heightChecker);
  });
});

function testCase(fn: (heights: number[]) => number) {
  it.each([
    // test cases
    [[1, 1, 4, 2, 1, 3], 3],
    [[5, 1, 2, 3, 4], 5],
    [[1, 2, 3, 4, 5], 0],
  ])("示例%#", (heights, expected) => {
    expect(fn(heights)).toBe(expected);
  });
}
