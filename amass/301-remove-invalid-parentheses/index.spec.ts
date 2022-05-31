import { describe, expect, it } from "vitest";
import { removeInvalidParentheses } from ".";

describe("删除无效的括号", () => {
  describe("回溯 dfs", () => {
    testCase(removeInvalidParentheses);
  });
});

function testCase(fn: (s: string) => string[]) {
  it.each([
    // test cases
    ["()())()", ["(())()", "()()()"]],
    ["(a)())()", ["(a())()", "(a)()()"]],
    [")(", [""]],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toEqual(expected);
  });
}
