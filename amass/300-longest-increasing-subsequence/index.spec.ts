import { describe, expect, it } from "vitest";
import { lengthOfLIS, lengthOfLIS2 } from ".";

describe("最长递增子序列", () => {
  describe("动态规划", () => {
    testCase(lengthOfLIS);
  });

  describe("贪心 + 二分查找", () => {
    testCase(lengthOfLIS2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[10, 9, 2, 5, 3, 7, 101, 18], 4],
    [[0, 1, 0, 3, 2, 3], 4],
    [[7, 7, 7, 7, 7, 7, 7], 1],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toBe(expected);
  });
}
