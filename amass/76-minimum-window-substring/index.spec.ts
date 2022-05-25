import { describe, expect, it } from "vitest";
import { minWindow } from ".";

describe("最小覆盖子串", () => {
  describe("滑动窗口 + 哈希表", () => {
    testCase(minWindow);
  });
});

function testCase(fn: (s: string, t: string) => string) {
  it.each([
    // test cases
    ["ADOBECODEBANC", "ABC", "BANC"],
    ["a", "a", "a"],
    ["a", "aa", ""],
  ])("示例%#", (s, t, expected) => {
    expect(fn(s, t)).toEqual(expected);
  });
}
