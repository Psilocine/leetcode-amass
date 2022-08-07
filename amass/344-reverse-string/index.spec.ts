import { describe, expect, it } from "vitest";
import { reverseString } from ".";

describe("反转字符串", () => {
  describe("双指针", () => {
    testCase(reverseString);
  });
});

function testCase(fn: (s: string[]) => string[]) {
  it.each([
    // test cases
    [
      ["h", "e", "l", "l", "o"],
      ["o", "l", "l", "e", "h"],
    ],
    [
      ["H", "a", "n", "n", "a", "h"],
      ["h", "a", "n", "n", "a", "H"],
    ],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toEqual(expected);
  });
}
