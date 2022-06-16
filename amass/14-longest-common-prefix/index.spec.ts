import { describe, expect, it } from "vitest";
import { longestCommonPrefix } from ".";

describe("最长公共前缀", () => {
  describe("纵向扫描", () => {
    testCase(longestCommonPrefix);
  });
});

function testCase(fn: (strs: string[]) => string) {
  it.each([
    // test cases
    [["flower", "flow", "flight"], "fl"],
    [["dog", "racecar", "car"], ""],
  ])("示例%#", (strs, expected) => {
    expect(fn(strs)).toBe(expected);
  });
}
