import { describe, expect, it } from "vitest";
import { letterCombinations, letterCombinations2 } from ".";

describe("电话号码的字母组合", () => {
  describe("DFS", () => {
    testCase(letterCombinations);
  });

  describe("BFS", () => {
    testCase(letterCombinations2);
  });
});

function testCase(fn: (digits: string) => string[]) {
  it.each([
    // test cases
    ["23", ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]],
    ["", []],
    ["2", ["a", "b", "c"]],
  ])("示例%#", (digits, expected) => {
    expect(fn(digits)).toEqual(expected);
  });
}
