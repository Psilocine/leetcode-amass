import { describe, expect, it } from "vitest";
import { removeDuplicates } from ".";

describe("删除字符串中的所有相邻重复项", () => {
  describe("栈", () => {
    testCase(removeDuplicates);
  });

});

function testCase(fn: (s: string) => string) {
  it.each([
    // test cases
    ["abbaca", "ca"],
    ["aaaaaaaa", ''],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toBe(expected);
  });
}
