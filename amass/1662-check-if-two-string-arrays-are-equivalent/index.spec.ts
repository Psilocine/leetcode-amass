import { describe, expect, it } from "vitest";
import { arrayStringsAreEqual } from ".";

describe("检查两个字符串数组是否相等", () => {
  describe("遍历", () => {
    testCase(arrayStringsAreEqual);
  });
});

function testCase(fn: (word1: string[], word2: string[]) => boolean) {
  it.each([
    // test cases
    [["ab", "c"], ["a", "bc"], true],
    [["a", "cb"], ["ab", "c"], false],
    [["abc", "d", "defg"], ["abcddefg"], true],
  ])("示例%#", (word1, word2, expected) => {
    expect(fn(word1, word2)).toBe(expected);
  });
}
