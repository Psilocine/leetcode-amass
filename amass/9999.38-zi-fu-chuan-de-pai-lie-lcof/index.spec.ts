import { describe, expect, it } from "vitest";
import { permutation } from ".";

describe("字符串的排列", () => {
  describe("回溯", () => {
    testCase(permutation);
  });
});

function testCase(fn: (s: string) => string[]) {
  it.each([
    // test cases
    ["abc", ["abc", "acb", "bac", "bca", "cab", "cba"]],
    ["zg", ["zg", "gz"]],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toEqual(expected);
  });
}
