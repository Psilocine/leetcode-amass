import { describe, expect, it } from "vitest";
import { canPlaceFlowers } from ".";

describe("种花问题", () => {
  describe("贪心", () => {
    testCase(canPlaceFlowers);
  });
});

function testCase(fn: (flowerbed: number[], n: number) => boolean) {
  it.each([
    // test cases
    [[1, 0, 0, 0, 1], 1, true],
    [[1, 0, 0, 0, 1], 2, false],
  ])("示例%#", (flowerbed, n, expected) => {
    expect(fn(flowerbed, n)).toBe(expected);
  });
}
