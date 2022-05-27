import { describe, expect, it } from "vitest";
import { search } from ".";

describe(" 二分查找", () => {
  describe("二分查找", () => {
    testCase(search);
  });
});

function testCase(fn: (nums: number[], target: number) => number) {
  it.each([
    // test cases
    [[-1, 0, 3, 5, 9, 12], 9, 4],
    [[-1, 0, 3, 5, 9, 12], 2, -1],
  ])("示例%#", (nums, target, expected) => {
    expect(fn(nums, target)).toBe(expected);
  });
}
