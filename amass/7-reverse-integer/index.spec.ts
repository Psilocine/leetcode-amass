import { describe, expect, it } from "vitest";
import { reverse, reverse2 } from ".";

describe("整数反转", () => {
  describe("模拟反转", () => {
    testCase(reverse);
  });

  describe("数学", () => {
    testCase(reverse2);
  });
});

function testCase(fn: (x: number) => number) {
  it.each([
    // test cases
    [123, 321],
    [-123, -321],
    [120, 21],
    [0, 0],
    [1534236469, 0],
  ])("示例%#", (x, expected) => {
    expect(fn(x)).toBe(expected);
  });
}
