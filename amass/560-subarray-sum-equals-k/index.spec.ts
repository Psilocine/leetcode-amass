import { describe, expect, it } from "vitest";
import { subarraySum } from ".";

describe("和为 K 的子数组", () => {
  describe('Name of the group', () => {
    testCase(subarraySum)
  });
});

function testCase(fn: (nums: number[], k: number) => number) {
  it.each([
    // test cases
    [[1, 2, 3], 3, 2],
    [[1, 1, 1], 2, 2],
  ])("示例%#", (nums, k, expected) => {
    expect(fn(nums, k)).toBe(expected);
  });
}
