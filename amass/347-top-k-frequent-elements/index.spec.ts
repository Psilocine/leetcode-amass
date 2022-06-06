import { describe, expect, it } from "vitest";
import { topKFrequent } from ".";

describe("前 K 个高频元素", () => {
  describe("哈希表 + 排序", () => {
    testCase(topKFrequent);
  });
});

function testCase(fn: (nums: number[], k: number) => number[]) {
  it.each([
    // test cases
    [[1, 1, 1, 2, 2, 3], 2, [1, 2]],
    [[1], 1, [1]],
  ])("示例%#", (nums, k, expected) => {
    expect(fn(nums, k)).toEqual(expected);
  });
}
