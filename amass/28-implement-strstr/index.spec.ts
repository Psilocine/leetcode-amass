import { describe, expect, it } from "vitest";
import { strStr, strStr2 } from ".";

describe("实现 strStr()", () => {
  describe("暴力匹配", () => {
    testCase(strStr);
  });
  describe("KMP 算法", () => {
    testCase(strStr2);
  });
});

function testCase(fn: (haystack: string, needle: string) => number) {
  it.each([
    // test cases
    ["hello", "ll", 2],
    ["aaaaa", "bba", -1],
  ])("示例%#", (haystack, needle, expected) => {
    expect(fn(haystack, needle)).toBe(expected);
  });
}
