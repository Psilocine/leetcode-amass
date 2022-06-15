import { describe, expect, it } from "vitest";
import { sortArray, sortArray2 } from ".";

describe("排序数组", () => {
  describe("快速排序", () => {
    testCase(sortArray);
  });
  describe("快速排序 - 空间优化", () => {
    testCase(sortArray2);
  });
});

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    // test cases
    [
      [5, 2, 3, 1],
      [1, 2, 3, 5],
    ],
    [
      [5, 1, 1, 2, 0, 0],
      [0, 0, 1, 1, 2, 5],
    ],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
