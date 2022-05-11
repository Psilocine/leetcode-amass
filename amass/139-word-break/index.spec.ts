import { describe, expect, it } from "vitest";
import { wordBreak } from ".";

describe("单词拆分", () => {
  describe("Name of the group", () => {
    testCase(wordBreak);
  });
});

function testCase(fn: (s: string, wordDict: string[]) => boolean) {
  it.each([
    // test cases
    ["leetcode", ["leet", "code"], true],
    ["applepenapple", ["apple", "pen"], true],
    ["catsandog", ["cats", "dog", "sand", "and", "cat"], false],
    ["cars", ["car", "ca", "rs"], true],
  ])("示例%#", (s, wordDict, expected) => {
    expect(fn(s, wordDict)).toEqual(expected);
  });
}
