import { describe, expect, it } from "vitest";
import { findUnsortedSubarray, findUnsortedSubarray2 } from ".";

describe("最短无序连续子数组", () => {
  describe("排序", () => {
    testCase(findUnsortedSubarray);
  });

  describe("双指针", () => {
    testCase(findUnsortedSubarray2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[2, 6, 4, 8, 10, 9, 15], 5],
    [[1, 2, 3, 4], 0],
    [[1, 2, 3, 3, 3], 0],
    [[1], 0],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
