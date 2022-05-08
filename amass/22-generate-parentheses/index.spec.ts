import { describe, expect, it } from "vitest";
import { generateParenthesis, generateParenthesis2 } from ".";

describe("括号生成", () => {
  describe("哈希表", () => {
    testCase(generateParenthesis);
  });
  describe("DFS", () => {
    testCase(generateParenthesis2);
  });
});

function testCase(fn: (n: number) => string[]) {
  it.each([
    // test cases
    [3, ["((()))", "(()())", "(())()", "()(())", "()()()"]],
    [1, ["()"]],
  ])("示例%#", (n, expected) => {
    expect(fn(n).length).toEqual(expected.length);
  });
}
