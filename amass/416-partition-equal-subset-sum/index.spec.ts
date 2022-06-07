import { describe, expect, it } from "vitest";
import { canPartition, canPartition2 } from ".";

describe("分割等和子集", () => {
  describe("动态规划", () => {
    testCase(canPartition);
  });
  describe("动态规划", () => {
    testCase(canPartition2);
  });
});

function testCase(fn: (nums: number[]) => boolean) {
  it.each([
    // test cases
    [[1, 5, 11, 5], true],
    [[1, 2, 3, 5], false],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toBe(expected);
  });
}
