import { describe, expect, it } from "vitest";
import { nextPermutation } from ".";

describe("下一个排列", () => {
  describe("双指针", () => {
    testCase(nextPermutation);
  });
});

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    // test cases
    [
      [1, 2, 3],
      [1, 3, 2],
    ],
    [
      [3, 2, 1],
      [1, 2, 3],
    ],
    [
      [1, 1, 5],
      [1, 5, 1],
    ],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
