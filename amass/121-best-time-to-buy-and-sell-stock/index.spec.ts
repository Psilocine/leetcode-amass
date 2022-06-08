import { describe, expect, it } from "vitest";
import { maxProfit, maxProfit2, maxProfit3 } from ".";

describe("买卖股票的最佳时机", () => {
  describe('暴力破解', () => {
    testCase(maxProfit);
  });

  describe('动态规划', () => {
    testCase(maxProfit2);
  });
  describe('动态规划 - 空间优化', () => {
    testCase(maxProfit3);
  });
});

function testCase(fn: (prices: number[]) => number) {
  it.each([
    // test cases
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
  ])("示例%#", (prices, expected) => {
    expect(fn(prices)).toEqual(expected);
  });
}
