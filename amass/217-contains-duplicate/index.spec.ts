import { describe, expect, it } from "vitest";
import { containsDuplicate, containsDuplicate2 } from ".";

describe("存在重复元素", () => {
  describe("排序 + 遍历", () => {
    testCase(containsDuplicate);
  });
  describe("哈希表", () => {
    testCase(containsDuplicate2);
  });
});

function testCase(fn: (nums: number[]) => boolean) {
  it.each([
    // test cases
    [[1, 2, 3, 1], true],
    [[1, 2, 3, 4], false],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toBe(expected);
  });
}
