import { describe, expect, it } from "vitest";
import { longestPalindrome, longestPalindrome2, longestPalindrome3 } from ".";

describe("最长回文子串", () => {
  describe("动态规划", () => {
    testCase(longestPalindrome);
  });
  describe("贪心 + 双指针", () => {
    testCase(longestPalindrome2);
  });
  describe("中心扩展", () => {
    testCase(longestPalindrome3);
  });
});

function testCase(fn: (s:string) => string) {
  it.each([
    // test cases
    ["babad", 'bab'],
    ['cbbd', 'bb']
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toEqual(expected);
  });
}
