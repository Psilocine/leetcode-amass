import { describe, expect, it } from "vitest";
import { checkInclusion } from ".";

describe("字符串的排列", () => {
  describe("滑动窗口", () => {
    testCase(checkInclusion);
  });
});

function testCase(fn: (s1: string, s2: string) => boolean) {
  it.each([
    // test cases
    ["ab", "eidbaooo", true],
    ["ab", "eidboaoo", false],
  ])("示例%#", (s1, s2, expected) => {
    expect(fn(s1, s2)).toBe(expected);
  });
}
