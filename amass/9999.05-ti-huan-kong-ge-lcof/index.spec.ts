import { describe, expect, it } from "vitest";
import { replaceSpace } from ".";

describe("替换空格", () => {
  describe("双指针", () => {
    testCase(replaceSpace);
  });
});

function testCase(fn: (s: string) => string) {
  it.each([
    // test cases
    ["We are happy.", "We%20are%20happy."],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toBe(expected);
  });
}
