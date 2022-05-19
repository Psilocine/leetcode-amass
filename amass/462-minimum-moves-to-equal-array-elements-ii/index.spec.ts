import { describe, expect, it } from "vitest";
import { minMoves, minMoves2 } from ".";

describe("最少移动次数使数组元素相等 II", () => {
  describe("暴力求解", () => {
    testCase(minMoves);
  });

  describe("排序 - 中位数", () => {
    testCase(minMoves2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[1, 2, 3], 2],
    [[1, 10, 2, 9], 16],
    [[1, 0, 0, 8, 6], 14],
  ])("示例%#", (nums, expected) => { 
    expect(fn(nums)).toEqual(expected);
  });
}
