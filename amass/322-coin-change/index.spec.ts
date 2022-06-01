import { describe, expect, it } from "vitest";
import { coinChange, coinChange2 } from ".";

describe("零钱兑换", () => {
  describe("动态规划 自顶向下", () => {
    testCase(coinChange);
  });
  describe("动态规划 自底向上", () => {
    testCase(coinChange2);
  });
});

function testCase(fn: (coins: number[], amount: number) => number) {
  it.each([
    // test cases
    [[1, 2, 5], 11, 3],
    [[2], 3, -1],
    [[1], 0, 0],
  ])("示例%#", (coins, amount, expected) => {
    expect(fn(coins, amount)).toBe(expected);
  });
}
