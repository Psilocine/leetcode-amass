import { describe, expect, it } from "vitest";
import { minSubArrayLen, minSubArrayLen2 } from ".";

describe("长度最小的子数组", () => {
  describe("前缀和 + 二分", () => {
    testCase(minSubArrayLen);
  });

  describe("滑动窗口", () => {
    testCase(minSubArrayLen2);
  });
});

function testCase(fn: (target: number, nums: number[]) => number) {
  it.each([
    // test cases
    [7, [2, 3, 1, 2, 4, 3], 2],
    [4, [1, 4, 4], 1],
    [11, [1, 1, 1, 1, 1, 1, 1, 1], 0],
  ])("示例%#", (target, nums, expected) => {
    expect(fn(target, nums)).toBe(expected);
  });
}
