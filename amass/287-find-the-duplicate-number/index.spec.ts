import { describe, expect, it } from "vitest";
import { findDuplicate, findDuplicate2, findDuplicate3 } from ".";

describe("寻找重复数", () => {
  describe("暴力求解", () => {
    testCase(findDuplicate);
  });

  describe("二分搜索", () => {
    testCase(findDuplicate2);
  });
  describe("快慢指针", () => {
    testCase(findDuplicate3);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[3, 1, 3, 4, 2], 3],
    [[1, 3, 4, 2, 2], 2],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
