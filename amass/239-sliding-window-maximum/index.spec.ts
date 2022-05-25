import { describe, expect, it } from "vitest";
import { maxSlidingWindow } from ".";

describe("滑动窗口最大值", () => {
  describe("单调队列", () => {
    testCase(maxSlidingWindow);
  });
});

function testCase(fn: (nums: number[], k: number) => number[]) {
  it.each([
    // test cases
    [[1, 3, -1, -3, 5, 3, 6, 7], 3, [3, 3, 5, 5, 6, 7]],
    [[1], 1, [1]],
  ])("示例%#", (nums, k, expected) => {
    expect(fn(nums, k)).toEqual(expected);
  });
}
