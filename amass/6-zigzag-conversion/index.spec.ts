import { describe, expect, it } from "vitest";
import { convert } from ".";

describe("Z 字形变换", () => {
  describe("Name of the group", () => {
    testCase(convert);
  });
});

function testCase(fn: (s: string, numRows: number) => string) {
  it.each([
    // test cases
    ["PAYPALISHIRING", 3, "PAHNAPLSIIGYIR"],
    ["PAYPALISHIRING", 4, "PINALSIGYAHRPI"],
    ["A", 1, "A"],
  ])("示例%#", (s, numRows, expected) => {
    expect(fn(s, numRows)).toBe(expected);
  });
}
