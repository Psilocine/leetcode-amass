import { describe, expect, it } from "vitest";
import { guessNumber } from ".";

describe("猜数字大小", () => {
  describe("二分查找", () => {
    testCase(guessNumber);
  });
});

function testCase(fn: (n: number, pick: number) => number) {
  it.each([
    // test cases
    [10, 6, 6],
    [1, 1, 1],
    [2, 1, 1],
    [2, 2, 2],
  ])("示例%#", (n, pick, expected) => {
    expect(fn(n, pick)).toBe(expected);
  });
}
