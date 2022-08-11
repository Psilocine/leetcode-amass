import { describe, expect, it } from "vitest";
import { reformat } from ".";

describe("重新格式化字符串", () => {
  describe("双指针 模拟", () => {
    testCase(reformat);
  });
});

function testCase(fn: (s:string) => string) {
  it.each([
    // test cases
    ["a0b1c2", "c2b1a0"],
    ["leetcode", ""],
    ["1229857369", ""],
    ["covid2019", "d9i1v0o2c"],
    ["ab123", "3b2a1"],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toBe(expected);
  });
}
