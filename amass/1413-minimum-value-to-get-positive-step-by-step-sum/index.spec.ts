import { describe, expect, it } from "vitest";
import { minStartValue, minStartValue2 } from ".";

describe("逐步求和得到正数的最小值", () => {
  describe("前缀表", () => {
    testCase(minStartValue);
  });

  describe("模拟", () => {
    testCase(minStartValue2);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[-3, 2, -3, 4, 2], 5],
    [[1, 2], 1],
    [[1, -2, -3], 5],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toBe(expected);
  });
}
