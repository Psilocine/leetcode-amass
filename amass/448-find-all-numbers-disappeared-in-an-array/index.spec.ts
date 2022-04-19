import { describe, expect, it } from "vitest";

import { findDisappearedNumbers, findDisappearedNumbers2 } from ".";

describe("找到所有数组中消失的数字", () => {
  describe("遍历", () => {
    testCase(findDisappearedNumbers);
  });
  describe("求模", () => {
    testCase(findDisappearedNumbers2);
  });
});

function testCase(fn: (nums:number[]) => number[]) {
  it.each([
    // test cases
    [
      [4, 3, 2, 7, 8, 2, 3, 1],
      [5, 6],
    ],
    [[1, 1], [2]],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
