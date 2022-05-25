import { describe, expect, it } from "vitest";
import { findAnagrams } from ".";

describe("找到字符串中所有字母异位词", () => {
  describe("滑动窗口", () => {
    testCase(findAnagrams);
  });
});

function testCase(fn: (s: string, p: string) => number[]) {
  it.each([
    // test cases
    ["cbaebabacd", "abc", [0, 6]],
    ["abab", "ab", [0, 1, 2]],
  ])("示例%#", (s, p, expected) => {
    expect(fn(s, p)).toEqual(expected);
  });
}
