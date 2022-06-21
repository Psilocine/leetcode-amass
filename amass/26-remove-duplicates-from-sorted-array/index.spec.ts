import { describe, expect, it } from "vitest";
import { removeDuplicates, removeDuplicates2 } from ".";

describe("删除有序数组中的重复项", () => {
  describe("哈希表", () => {
    testCase(removeDuplicates);
  });

  describe("快慢指针", () => {
    testCase(removeDuplicates2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[1, 1, 2], 2],
    [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toBe(expected);
  });
}
