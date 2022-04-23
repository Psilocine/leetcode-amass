import { describe, expect, it } from "vitest";
import { lengthOfLongestSubstring } from ".";

describe("无重复字符的最长子串", () => {
  describe('双指针', () => {
    testCase(lengthOfLongestSubstring)
  });
});

function testCase(fn: (s: string) => number) {
  it.each([
    // test cases
    ["abcabcbb", 3],
    ['bbbbb', 1],
    ['pwwkew', 3]
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toEqual(expected);
  });
}
