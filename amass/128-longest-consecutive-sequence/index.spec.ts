import { describe, expect, it } from "vitest";
import { longestConsecutive } from ".";
describe("最长连续序列", () => {
  describe("排序 + 去重", () => {
    testCase(longestConsecutive);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[0], 1],
    [[], 0],
    [[1, 2, 0, 1], 3],
    [[100, 4, 200, 1, 3, 2], 4],
    [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1], 9],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
