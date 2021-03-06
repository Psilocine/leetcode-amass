import { describe, expect, it } from "vitest";
import { maxSubArray, maxSubArray2 } from ".";

describe("最大子数组和", () => {
  describe("动态规划", () => {
    testCase(maxSubArray);
  })

  describe("分治", () => {
    testCase(maxSubArray2);
  })
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
    [[1], 1],
    [[5,4,-1,7,8], 23]
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
