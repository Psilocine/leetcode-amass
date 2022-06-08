import { describe, expect, it } from "vitest";
import { maxProfit, maxProfit2 } from ".";

describe("买卖股票的最佳时机含手续费", () => {

  describe("动态规划", () => {
    testCase(maxProfit);
  });
  describe("动态规划 - 空间优化", () => {
    testCase(maxProfit2);
  });
});

function testCase(fn: (prices: number[], fee: number) => number) {
  it.each([
    // test cases
    [[1, 3, 2, 8, 4, 9], 2, 8],
    [[1, 3, 7, 5, 10, 3], 3, 6],
  ])("示例%#", (prices, fee, expected) => {
    expect(fn(prices, fee)).toBe(expected);
  });
}
