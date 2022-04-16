import { describe, expect, it } from "vitest";
import { singleNumber, singleNumber2 } from ".";

describe("只出现一次的数字", () => {
  describe("哈希表", () => {
    testCase(singleNumber);
  });
  describe("异或运算", () => {
    testCase(singleNumber2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[2, 2, 1], 1],
    [[4, 1, 2, 1, 2], 4],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
