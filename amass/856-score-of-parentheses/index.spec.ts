import { describe, expect, it } from "vitest";
import { scoreOfParentheses } from ".";

describe("括号的分数", () => {
  describe("栈", () => {
    testCase(scoreOfParentheses);
  });
});

function testCase(fn: (s: string) => number) {
  it.each([
    // test cases
    ["()", 1],
    ["(())", 2],
    ["()()", 2],
    ["(()(()))", 6],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toBe(expected);
  });
}
