import { describe, expect, it } from "vitest";
import { nextGreaterElement } from ".";

describe("下一个更大元素 I", () => {
  describe("单调栈 + 哈希表", () => {
    testCase(nextGreaterElement);
  });
});

function testCase(fn: (nums1: number[], nums2: number[]) => number[]) {
  it.each([
    // test cases
    [
      [4, 1, 2],
      [1, 3, 4, 2],
      [-1, 3, -1],
    ],
    [
      [2, 4],
      [1, 2, 3, 4],
      [3, -1],
    ],
  ])("示例%#", (nums1, nums2, expected) => {
    expect(fn(nums1, nums2)).toEqual(expected);
  });
}
