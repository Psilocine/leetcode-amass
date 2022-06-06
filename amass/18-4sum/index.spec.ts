import { describe, expect, it } from "vitest";
import { fourSum } from ".";

describe("四数之和", () => {
  describe("排序 + 双指针", () => {
    testCase(fourSum);
  });
});

function testCase(fn: (nums: number[], target: number) => number[][]) {
  it.each([
    // test cases
    [
      [1, 0, -1, 0, -2, 2],
      0,
      [
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
      ],
    ],
    [[2, 2, 2, 2, 2], 8, [[2, 2, 2, 2]]],
  ])("示例%#", (nums, target, expected) => {
    expect(fn(nums, target)).toEqual(expected);
  });
}
