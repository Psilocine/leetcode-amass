import { describe, expect, it } from "vitest";
import { rob } from ".";

describe("打家劫舍 II", () => {
  describe("动态规划", () => {
    testCase(rob);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[2, 3, 2], 3],
    [[1, 2, 3, 1], 4],
    [[1, 2, 3], 3],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
