import { describe, expect, it } from "vitest";
import { isAlienSorted } from ".";

describe("验证外星语词典", () => {
  describe("Name of the group", () => {
    testCase(isAlienSorted);
  });
});

function testCase(fn: (words: string[], order: string) => boolean) {
  it.each([
    // test cases
    [["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz", true],
    [["word", "world", "row"], "worldabcefghijkmnpqstuvxyz", false],
    [["apple", "app"], "abcdefghijklmnopqrstuvwxyz", false],
  ])("示例%#", (words, order, expected) => {
    expect(fn(words, order)).toEqual(expected);
  });
}
