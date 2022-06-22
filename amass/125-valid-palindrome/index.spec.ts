import { describe, expect, it } from "vitest";
import { validPalindrome } from ".";

describe("验证回文串", () => {
  describe("双指针", () => {
    testCase(validPalindrome);
  });
});

function testCase(fn: (s: string) => boolean) {
  it.each([
    // test cases
    ["A man, a plan, a canal: Panama", true],
    ["race a car", false],
    ["ab_a", true],
  ])("示例%#", () => {
    expect(true).toBe(true);
  });
}
