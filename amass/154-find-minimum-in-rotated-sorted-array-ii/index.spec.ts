import { describe, expect, it } from "vitest";
import { findMin } from ".";

describe("寻找旋转排序数组中的最小值 II", () => {
  describe("二分查找", () => {
    testCase(findMin);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[1, 3, 5], 1],
    [[2, 2, 2, 0, 1], 0],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toBe(expected);
  });
}
