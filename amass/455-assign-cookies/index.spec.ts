import { describe, expect, it } from "vitest";
import { findContentChildren } from ".";

describe("分发饼干", () => {
  describe("排序 + 贪心", () => {
    testCase(findContentChildren);
  });
});

function testCase(fn: (g: number[], s: number[]) => number) {
  it.each([
    // test cases
    [[1, 2, 3], [1, 1], 1],
    [[1, 2], [1, 2, 3], 2],
  ])("示例%#", (g, s, expected) => {
    expect(fn(g, s)).toBe(expected);
  });
}
