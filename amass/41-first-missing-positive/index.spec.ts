import { describe, expect, it } from "vitest";
import { firstMissingPositive, firstMissingPositive2 } from ".";

describe("缺失的第一个正数", () => {
  describe("哈希表 - 不符合", () => {
    testCase(firstMissingPositive);
  });

  describe("原地哈希", () => {
    testCase(firstMissingPositive2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[1, 2, 0], 3],
    [[3, 4, -1, 1], 2],
    [[7, 8, 9, 11, 12], 1],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toBe(expected);
  });
}
