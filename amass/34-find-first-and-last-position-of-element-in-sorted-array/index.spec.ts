import { describe, expect, it } from "vitest";
import { searchRange, searchRange2 } from ".";

describe("在排序数组中查找元素的第一个和最后一个位置", () => {
  describe("暴力破解法", () => {
    testCase(searchRange);
  });

  describe('二分法', () => {
    testCase(searchRange2);
  });
});

function testCase(fn: (nums: number[], target: number) => number[]) {
  it.each([
    // test cases
    [[1, 3], 1, [0, 0]],
    [[0, 0,0,1,2,3], 0, [0, 2]],
    [[5, 7, 7, 8, 8, 10], 8, [3, 4]],
    [[5, 7, 7, 8, 8, 10], 6, [-1, -1]],
  ])("示例%#", (nums, target, expected) => {
    expect(fn(nums,target)).toEqual(expected);
  });
}
