import { describe, expect, it } from "vitest";
import { nextGreaterElements } from ".";

describe("下一个更大元素 II", () => {
  describe("单调栈", () => {
    testCase(nextGreaterElements);
  });
});

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    // test cases
    [
      [1, 2, 1],
      [2, -1, 2],
    ],
    [
      [1, 2, 3, 4, 3],
      [2, 3, 4, -1, 4],
    ],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
