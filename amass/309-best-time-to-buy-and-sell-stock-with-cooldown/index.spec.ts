import { describe, expect, it } from "vitest";
import { maxProfit, maxProfit2 } from ".";

describe("最佳买卖股票时机含冷冻期", () => {
  describe("动态规划", () => {
    testCase(maxProfit);
  });
  describe("动态规划 - 空间优化", () => {
    testCase(maxProfit2);
  });
});

function testCase(fn: (prices: number[]) => number) {
  it.each([
    // test cases
    [[1, 2, 3, 0, 2], 3],
    [[1], 0],
  ])("示例%#", (prices, expected) => {
    expect(fn(prices)).toBe(expected);
  });
}
