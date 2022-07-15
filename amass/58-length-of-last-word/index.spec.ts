import { describe, expect, it } from "vitest";
import { lengthOfLastWord, lengthOfLastWord2 } from ".";

describe("最后一个单词的长度", () => {
  describe("split", () => {
    testCase(lengthOfLastWord);
  });

  describe("模拟", () => {
    testCase(lengthOfLastWord2);
  });
});

function testCase(fn: (s: string) => number) {
  it.each([
    // test cases
    ["Hello World", 5],
    ["   fly me   to   the moon  ", 4],
    ["luffy is still joyboy", 6],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toBe(expected);
  });
}
