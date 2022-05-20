import { describe, expect, it } from "vitest";
import { addString } from ".";

describe("字符串相加", () => {
  describe("模拟", () => {
    testCase(addString);
  });
});

function testCase(fn: (num1: string, num2: string) => string) {
  it.each([
    // test cases
    ["11", "123", "134"],
    ["456", "77", "533"],
    ["0", "0", "0"],
  ])("示例%#", (num1, num2, expected) => {
    expect(fn(num1, num2)).toEqual(expected);
  });
}
