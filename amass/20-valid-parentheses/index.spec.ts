import { describe, expect, it } from "vitest";
import { validParentheses } from ".";

describe("有效的括号", () => {
  describe("栈", () => {
    testCase(validParentheses);
  });
});

function testCase(fn: (string: string) => boolean) {
  it.each([
    // test cases
    ["()", true],
    ["()[]{}", true],
    ["(]", false],
    ["([)]", false],
    ["{[]}", true],
  ])("示例%#", (str, expected) => {
    expect(fn(str)).toBe(expected);
  });
}
