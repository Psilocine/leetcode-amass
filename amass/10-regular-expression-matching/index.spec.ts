import { describe, expect, it } from "vitest";
import { isMatch } from ".";

describe("正则表达式匹配", () => {
  describe("动态规划", () => {
    testCase(isMatch);
  });
});

function testCase(fn: (s: string, p: string) => boolean) {
  it.each([
    // test cases
    ["aa", "a", false],
    ["aa", "a*", true],
    ["ab", ".*", true],
  ])("示例%#", (s, p, expected) => {
    expect(fn(s, p)).toBe(expected);
  });
}
