import { describe, expect, it } from "vitest";
import { productExceptSelf, productExceptSelf2 } from ".";

describe("除自身以外数组的乘积", () => {
  describe("左右乘积", () => {
    testCase(productExceptSelf);
  });
  describe("左右乘积 + 优化", () => {
    testCase(productExceptSelf2);
  });
});

function testCase(fn: (nums: number[]) => number[]) {
  it.each([
    // test cases
    [
      [1, 2, 3, 4],
      [24, 12, 8, 6],
    ],
    [
      [-1, 1, 0, -3, 3],
      [-0, 0, 9, -0, 0],
    ],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
