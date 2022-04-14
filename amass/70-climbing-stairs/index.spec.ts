import { describe, expect, it } from "vitest";
import { climbingStairs, climbingStairs2 } from ".";

describe("爬楼梯", () => {
  
  describe('递归', () => {
    testCase(climbingStairs2);
  });
  describe('动态规划', () => {
    testCase(climbingStairs);
  });
});

function testCase(fn: (number: number) => number) {
  it.each([
    // test cases
    [2, 2],
    [3, 3],
    [4, 5],
    [5, 8]
  ])("示例%#", (num, expected) => {
    expect(fn(num)).toEqual(expected);
  });
}
