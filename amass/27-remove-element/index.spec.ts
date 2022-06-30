import { describe, expect, it } from "vitest";
import { removeElement } from ".";

describe("移除元素", () => {
  describe("双指针", () => {
    testCase(removeElement);
  });
});

function testCase(fn: (nums: number[], val: number) => number) {
  it.each([
    // test cases
    [[3, 2, 2, 3], 3, 2],
    [[0, 1, 2, 2, 3, 0, 4, 2], 2, 5],
  ])("示例%#", (nums, val, expected) => {
    expect(fn(nums, val)).toBe(expected);
  });
}
