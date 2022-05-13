import { describe, expect, it } from "vitest";
import { maxProduct } from '.'

describe("乘积最大子数组", () => {
  describe('动态规划', () => {
    testCase(maxProduct)
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[0, 2], 2],
    [[2, 3, -2, 4], 6],
    [[-2, 0, -1], 0],
    [[-4, -3, -2], 12],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
