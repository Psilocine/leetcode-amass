import { describe, expect, it } from "vitest";
import { sortedSquares } from ".";

describe("有序数组的平方", () => {
  describe("双指针", () => {
    testCase(sortedSquares);
  });
});

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    // test cases
    [
      [-4, -1, 0, 3, 10],
      [0, 1, 9, 16, 100],
    ],
    [
      [-7, -3, 2, 3, 11],
      [4, 9, 9, 49, 121],
    ],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
