import { describe, expect, it } from "vitest";
import { judgeSquareSum } from ".";

describe("平方数之和", () => {
  describe("双指针", () => {
    testCase(judgeSquareSum);
  });
});

function testCase(fn: (c: number) => boolean) {
  it.each([
    // test cases
    [5, true],
    [3, false],
    [4, true],
  ])("示例%#", (c, expected) => {
    expect(fn(c)).toBe(expected);
  });
}
