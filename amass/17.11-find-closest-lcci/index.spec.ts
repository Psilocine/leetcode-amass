import { describe, expect, it } from "vitest";
import { findClosest } from ".";

describe("面试题 17.11. 单词距离", () => {
  describe("遍历", () => {
    testCase(findClosest);
  });
});

function testCase(
  fn: (words: string[], word1: string, word2: string) => number
) {
  it.each([
    // test cases
    [
      ["I", "am", "a", "student", "from", "a", "university", "in", "a", "city"],
      "a",
      "student",
      1,
    ],
  ])("示例%#", (words, word1, word2, expected) => {
    expect(fn(words, word1, word2)).toBe(expected);
  });
}
