import { describe, expect, it } from "vitest";
import { countSubstrings, countSubstrings2, countSubstrings3 } from ".";

describe("回文子串", () => {
  describe("暴力破解", () => {
    testCase(countSubstrings);
  });
  describe("动态规划", () => {
    testCase(countSubstrings2);
  });

  describe("动态规划 - 降维优化空间复杂度", () => {
    testCase(countSubstrings3);
  });
});

function testCase(fn: (s: string) => number) {
  it.each([
    // test cases
    // ['abc', 3],
    ["aaa", 6],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toEqual(expected);
  });
}
