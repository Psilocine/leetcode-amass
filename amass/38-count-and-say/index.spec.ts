import { describe, expect, it } from "vitest";
import { countAndSay } from ".";

describe("外观数列", () => {
  describe("模拟 遍历", () => {
    testCase(countAndSay);
  });
});

function testCase(fn: (n: number) => string) {
  it.each([
    // test cases
    [1, "1"],
    [4, "1211"],
  ])("示例%#", (n, expected) => {
    expect(fn(n)).toBe(expected);
  });
}
