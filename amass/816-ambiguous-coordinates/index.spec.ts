import { describe, expect, it } from "vitest";
import { ambiguousCoordinates } from ".";

describe("模糊坐标", () => {
  describe("模拟", () => {
    testCase(ambiguousCoordinates);
  });
});

function testCase(fn: (s: string) => string[]) {
  it.each([
    // test cases
    ["(123)", ["(1, 23)", "(1, 2.3)", "(12, 3)", "(1.2, 3)"]],
    ["(00011)", ["(0.001, 1)", "(0, 0.011)"]],
    ["(100)", ["(10, 0)"]],
    [
      "(0123)",
      [
        "(0, 123)",
        "(0, 12.3)",
        "(0, 1.23)",
        "(0.1, 23)",
        "(0.1, 2.3)",
        "(0.12, 3)",
      ],
    ],
  ])("示例%#", (s, expected) => {
    expect(fn(s).length).toBe(expected.length);
  });
}
