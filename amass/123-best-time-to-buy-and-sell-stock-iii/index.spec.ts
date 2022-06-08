import { describe, expect, it } from "vitest";
import { maxProfit, maxProfit2 } from ".";

describe("买卖股票的最佳时机 III", () => {
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
    [[3, 3, 5, 0, 0, 3, 1, 4], 6],
    [[1, 2, 3, 4, 5], 4],
    [[7, 6, 4, 3, 1], 0],
    [[1], 0],
  ])("示例%#", (prices, expected) => {
    expect(fn(prices)).toBe(expected);
  });
}
