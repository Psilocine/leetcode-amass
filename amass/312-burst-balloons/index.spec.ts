import { describe, expect, it } from "vitest";
import { maxCoins } from ".";

describe("戳气球", () => {
  describe("maxCoins", () => {
    testCase(maxCoins);
  });
});

function testCase(fn: (nums: number[]) => number) {
  it.each([
    // test cases
    [[3, 1, 5, 8], 167],
    [[1, 5], 10],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toBe(expected);
  });
}
