import { describe, expect, it } from "vitest";
import { findTargetSumWays } from ".";

describe("目标和", () => {
  describe("Name of the group", () => {
    testCase(findTargetSumWays);
  });
});

function testCase(fn: (nums: number[], target: number) => number) {
  it.each([
    // test cases
    [[1, 1, 1, 1, 1], 3, 5],
    [[1], 1, 1],
  ])("示例%#", (nums, target, expected) => {
    expect(fn(nums, target)).toBe(expected);
  });
}
