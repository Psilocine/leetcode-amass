import { describe, expect, it } from "vitest";
import { longestPalindrome } from ".";

describe("最长回文子串", () => {
  testCase(longestPalindrome);
});

function testCase(fn: (s:string) => string) {
  it.each([
    // test cases
    ["babad", 'bab'],
    ['cbbd', 'bb']
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toEqual(expected);
  });
}
