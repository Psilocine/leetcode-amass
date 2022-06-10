import { describe, expect, it } from "vitest";
import { largestRectangleArea } from ".";

describe("柱状图中最大的矩形", () => {
  describe("单调栈", () => {
    testCase(largestRectangleArea);
  });
});

function testCase(fn: (heights: number[]) => number) {
  it.each([
    // test cases
    [[2, 1, 2], 3],
    [[2, 1, 5, 6, 2, 3], 10],
    [[2, 4], 4],
  ])("示例%#", (heights, expected) => {
    expect(fn(heights)).toBe(expected);
  });
}
