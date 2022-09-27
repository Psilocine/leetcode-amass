import { describe, expect, it } from "vitest";
import { CheckPermutation, CheckPermutation2 } from ".";

describe("判定是否互为字符重排", () => {
  describe("排序", () => {
    testCase(CheckPermutation);
  });
  describe("哈希表", () => {
    testCase(CheckPermutation2);
  });
});

function testCase(fn: (s1: string, s2: string) => boolean) {
  it.each([
    // test cases
    ["abc", "bca", true],
    ["abc", "bad", false],
  ])("示例%#", (s1, s2, expected) => {
    expect(fn(s1, s2)).toBe(expected);
  });
}
