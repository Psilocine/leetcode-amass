import { describe, expect, it } from "vitest";
import { isFlipedString } from ".";

describe("字符串轮转", () => {
  describe("搜索子字符串", () => {
    testCase(isFlipedString);
  });
});

function testCase(fn: (s1: string, s2: string) => boolean) {
  it.each([
    // test cases
    ["waterbottle", "erbottlewat", true],
    ["aa", "aba", false],
  ])("示例%#", (s1, s2, expected) => {
    expect(fn(s1, s2)).toBe(expected);
  });
}
