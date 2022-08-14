import { describe, expect, it } from "vitest";
import { maxScore } from ".";

describe("分割字符串的最大得分", () => {
  describe("模拟", () => {
    testCase(maxScore);
  });
});

function testCase(fn: (s: string) => number) {
  it.each([
    // test cases
    ["011101", 5],
    ["00111", 5],
    ["1111", 3],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toBe(expected);
  });
}
