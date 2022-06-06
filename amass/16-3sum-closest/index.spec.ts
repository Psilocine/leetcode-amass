import { describe, expect, it } from "vitest";
import { threeSumClosest } from ".";

describe("最接近的三数之和", () => {
  describe("双指针 + 排序", () => {
    testCase(threeSumClosest);
  });
});

function testCase(fn: (nums: number[], target: number) => number) {
  it.each([
    // test cases
    [[-1, 2, 1, -4], 1, 2],
    [[0, 0, 0], 1, 0],
    [[1, 1, 1, 0], -100, 2],
  ])("示例%#", (nums, target, expected) => {
    expect(fn(nums, target)).toBe(expected);
  });
}
