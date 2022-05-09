import { describe, expect, it } from "vitest";
import { numTrees } from '.'

describe("不同的二叉搜索树", () => {
  describe('动态规划', () => {
    testCase(numTrees)
  });
});

function testCase(fn: (n: number) => number) {
  it.each([
    // test cases
    [3, 5],
    [1, 1],
    [2, 2]
  ])("示例%#", (n, expected) => {
    expect(fn(n)).toEqual(expected);
  });
}
