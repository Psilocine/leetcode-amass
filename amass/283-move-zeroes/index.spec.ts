import { describe, expect, it } from "vitest";
import { moveZeroes } from ".";

describe("移动零", () => {
  describe("双指针", () => {
    testCase(moveZeroes);
  });
});

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    // test cases
    [
      [0, 1, 0, 3, 12],
      [1, 3, 12, 0, 0],
    ],
    [[0], [0]],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toStrictEqual(expected);
  });
}
