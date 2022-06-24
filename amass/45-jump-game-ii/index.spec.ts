import { describe, expect, it } from "vitest";
import { jump } from ".";

describe("跳跃游戏 II", () => {
  describe("贪心", () => {
    testCase(jump);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[2, 3, 1, 1, 4], 2],
    [[2, 3, 0, 1, 4], 2],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toBe(expected);
  });
}
