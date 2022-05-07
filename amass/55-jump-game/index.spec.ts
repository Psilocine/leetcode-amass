import { describe, expect, it } from "vitest";
import { canJump } from ".";

describe("跳跃游戏", () => {
  describe("动态规划", () => {
    testCase(canJump);
  });
});

function testCase(fn: (nums: number[]) => boolean) {
  it.each([
    // test cases
    [[2, 3, 1, 1, 4], true],
    [[3, 2, 1, 0, 4], false],
    [
      [
        8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5, 1, 2, 6, 6,
        0, 4, 8, 6, 0, 3, 2, 8, 7, 6, 5, 1, 7, 0, 3, 4, 8, 3, 5, 9, 0, 4, 0, 1,
        0, 5, 9, 2, 0, 7, 0, 2, 1, 0, 8, 2, 5, 1, 2, 3, 9, 7, 4, 7, 0, 0, 1, 8,
        5, 6, 7, 5, 1, 9, 9, 3, 5, 0, 7, 5,
      ],
      true
    ],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
