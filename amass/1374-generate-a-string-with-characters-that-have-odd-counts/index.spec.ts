import { describe, expect, it } from "vitest";
import { generateTheString } from ".";

describe("生成每种字符都是奇数个的字符串", () => {
  describe("简单模拟", () => {
    testCase(generateTheString);
  });
});

function testCase(fn: (n: number) => string) {
  it.each([
    [4, "aaab"],
    [2, "ab"],
    [7, "aaaaaaa"],
    // test cases
  ])("示例%#", (n, expected) => {
    expect(fn(n)).toBe(expected);
  });
}
