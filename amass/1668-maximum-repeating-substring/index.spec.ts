import { describe, expect, it } from "vitest";
import { maxRepeating } from ".";

describe("最大重复子字符串", () => {
  describe("动态规划", () => {
    testCase(maxRepeating);
  });
});

function testCase(fn: (sequence: string, word: string) => number) {
  it.each([
    // test cases
    ["ababc", "ab", 2],
    ["ababc", "ba", 1],
    ["ababc", "ac", 0],
  ])("示例%#", (sequence, word, expected) => {
    expect(fn(sequence, word)).toBe(expected);
  });
}
