import { describe, expect, it } from "vitest";
import { smallerNumbersThanCurrent } from ".";

describe("有多少小于当前数字的数字", () => {
  describe("排序 + 遍历", () => {
    testCase(smallerNumbersThanCurrent);
  });
});

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    // test cases
    [
      [8, 1, 2, 2, 3],
      [4, 0, 1, 1, 3],
    ],
    [
      [6, 5, 4, 8],
      [2, 1, 0, 3],
    ],
    [
      [7, 7, 7, 7],
      [0, 0, 0, 0],
    ],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
