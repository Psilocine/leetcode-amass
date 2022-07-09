import { describe, expect, it } from "vitest";
import { lenLongestFibSubseq, lenLongestFibSubseq2, lenLongestFibSubseq3 } from ".";

describe("最长的斐波那契子序列的长度", () => {
  describe("哈希表 + 遍历", () => {
    testCase(lenLongestFibSubseq);
  });

  describe("记忆化搜索", () => {
    testCase(lenLongestFibSubseq2);
  });
  describe('动态规划', () => {
    testCase(lenLongestFibSubseq3);
  });
});

function testCase(fn: (arr: number[]) => number) {
  it.each([
    // test cases
    [[1, 2, 3, 4, 5, 6, 7, 8], 5],
    [[1, 3, 7, 11, 12, 14, 18], 3],
  ])("示例%#", (arr, expected) => {
    expect(fn(arr)).toBe(expected);
  });
}
