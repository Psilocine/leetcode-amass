import { describe, expect, it } from "vitest";
import { rob } from ".";

describe("打家劫舍", () => {
  describe("动态规划", () => {
    testCase(rob);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[1, 2, 3, 1], 4],
    [[2, 7, 9, 3, 1], 12],
    [[2, 1, 1, 2], 4],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
