import { describe, expect, it } from "vitest";
import { sortColors, sortColors2, sortColors3 } from ".";

describe("颜色分类", () => {
  describe("单指针", () => {
    testCase(sortColors);
  });

  describe('双指针', () => {
    testCase(sortColors2);
  });

  describe('双指针', () => {
    testCase(sortColors3);
  });
});

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    // test cases
    [
      [2, 0, 2, 1, 1, 0],
      [0, 0, 1, 1, 2, 2],
    ],
    [
      [2, 0, 1],
      [0, 1, 2],
    ],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
