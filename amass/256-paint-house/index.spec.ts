import { describe, expect, it } from "vitest";
import { minCost, minCost2 } from ".";

describe("粉刷房子", () => {
  describe("动态规划", () => {
    testCase(minCost);
  });

  describe("动态规划 - 空间优化", () => {
    testCase(minCost2);
  });
});

function testCase(fn: (costs: number[][]) => number) {
  it.each([
    // test cases
    [
      [
        [17, 2, 17],
        [16, 16, 5],
        [14, 3, 19],
      ],
      10,
    ],
    [[[7, 6, 2]], 2],
  ])("示例%#", (costs, expected) => {
    expect(fn(costs)).toEqual(expected);
  });
}
