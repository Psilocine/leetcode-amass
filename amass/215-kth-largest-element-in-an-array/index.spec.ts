import { describe, expect, it } from "vitest";
import { findKthLargest, findKthLargest2 } from ".";

describe("数组中的第K个最大元素", () => {
  describe("sort 排序", () => {
    testCase(findKthLargest);
  });
  describe('快速排序', () => {
    testCase(findKthLargest2);
  });
});

function testCase(fn: (nums: number[], k: number) => number) {
  it.each([
    // test cases
    [[3, 2, 1, 5, 6, 4], 2, 5],
    [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4, 4],
  ])("示例%#", (nums, k, expected) => {
    expect(fn(nums, k)).toEqual(expected);
  });
}
