import { describe, expect, it } from "vitest";
import { fourSumCount } from ".";

describe("四数相加 II", () => {
  describe("哈希表", () => {
    testCase(fourSumCount);
  });
});

function testCase(
  fn: (
    nums1: number[],
    nums2: number[],
    nums3: number[],
    nums4: number[]
  ) => number
) {
  it.each([
    // test cases
    [[1, 2], [-2, -1], [-1, 2], [0, 2], 2],
    [[0], [0], [0], [0], 1],
  ])("示例%#", (nums1, nums2, nums3, nums4, expected) => {
    expect(fn(nums1, nums2, nums3, nums4)).toBe(expected);
  });
}
