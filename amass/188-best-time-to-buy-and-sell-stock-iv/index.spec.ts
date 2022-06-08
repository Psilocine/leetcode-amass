import { describe, expect, it } from "vitest";
import { maxProfit } from ".";

describe("买卖股票的最佳时机 IV", () => {
  describe("动态规划", () => {
    testCase(maxProfit);
  });
});

function testCase(fn: (k: number, prices: number[]) => number) {
  it.each([
    // test cases
    [2, [], 0],
    [2, [2, 4, 1], 2],
    [2, [3, 2, 6, 5, 0, 3], 7],
  ])("示例%#", (k, prices, expected) => {
    expect(fn(k, prices)).toBe(expected);
  });
}
