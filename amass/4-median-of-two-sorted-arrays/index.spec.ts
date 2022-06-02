import { describe, expect, it } from "vitest";
import { findMedianSortedArrays } from ".";
describe("寻找两个正序数组的中位数", () => {
  describe("Name of the group", () => {
    testCase(findMedianSortedArrays);
  });
});

function testCase(fn: (nums1: number[], nums2: number[]) => number) {
  it.each([
    // test cases
    [[1, 3], [2], 2.0],
    [[1, 2], [3, 4], 2.5],
  ])("示例%#", (nums1, nums2, expected) => {
    expect(fn(nums1, nums2)).toBe(expected);
  });
}
