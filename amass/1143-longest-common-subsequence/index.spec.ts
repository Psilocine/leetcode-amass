import { describe, expect, it } from "vitest";
import { longestCommonSubsequence } from ".";

describe("最长公共子序列", () => {
  describe("动态规划", () => {
    testCase(longestCommonSubsequence);
  });
});

function testCase(fn: (text1: string, text2: string) => number) {
  it.each([
    // test cases
    ["abcde", "ace", 3],
    ["abc", "abc", 3],
    ["abc", "def", 0],
  ])("示例%#", (text1, text2, expected) => {
    expect(fn(text1, text2)).toBe(expected);
  });
}
