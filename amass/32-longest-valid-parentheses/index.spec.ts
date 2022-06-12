import { describe, expect, it } from "vitest";
import { longestValidParentheses } from ".";

describe("最长有效括号", () => {
  describe("动态规划", () => {
    testCase(longestValidParentheses);
  });
});

function testCase(fn: (s: string) => number) {
  it.each([
    // test cases
    ["(()", 2],
    [")()())", 4],
    ["", 0],
    ["(()())", 6],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toBe(expected);
  });
}
