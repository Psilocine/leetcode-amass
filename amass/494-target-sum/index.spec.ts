import { describe, expect, it } from "vitest";
import { findTargetSumWays, findTargetSumWays2 } from ".";

describe("目标和", () => {
  describe("dfs", () => {
    testCase(findTargetSumWays);
  });

  describe('动态规划', () => {
    testCase(findTargetSumWays2)
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
