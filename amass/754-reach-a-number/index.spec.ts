import { describe, expect, it } from "vitest";
import { reachNumber } from ".";

describe("到达终点数字", () => {
  describe("模拟", () => {
    testCase(reachNumber);
  });
});

function testCase(fn: (target: number) => number) {
  it.each([
    // test cases
    [2, 3],
    [3, 2],
  ])("示例%#", (target, expected) => {
    expect(fn(target)).toBe(expected);
  });
}
