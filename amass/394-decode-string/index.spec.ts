import { describe, expect, it } from "vitest";
import { decodeString } from ".";
describe("字符串解码", () => {
  describe("decodeString", () => {
    testCase(decodeString);
  });
});

function testCase(fn: (s: string) => string) {
  it.each([
    // test cases
    ["3[a]2[bc]", "aaabcbc"],
    ["3[a2[c]]", "accaccacc"],
    ["2[abc]3[cd]ef", "abcabccdcdcdef"],
    ["abc3[cd]xyz", "abccdcdcdxyz"],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toBe(expected);
  });
}
