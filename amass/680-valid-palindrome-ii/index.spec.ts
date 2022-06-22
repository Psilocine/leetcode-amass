import { describe, expect, it } from "vitest";
import { validPalindrome } from ".";

describe("验证回文字符串 Ⅱ", () => {
  describe("双指针", () => {
    testCase(validPalindrome);
  });
});

function testCase(fn: (s: string) => boolean) {
  it.each([
    // test cases
    ["aba", true],
    ["abca", true],
    ["abc", false],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toBe(expected);
  });
}
