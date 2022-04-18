import { describe, expect, it } from "vitest";
import { hammingDistance, hammingDistance2 } from ".";

describe("汉明距离", () => {
  describe("位运算", () => {
    testCase(hammingDistance);
  });
  describe("Brian Kernighan 算法", () => {
    testCase(hammingDistance2);
  });
});

function testCase(fn: (x: number, y: number) => number) {
  it.each([
    // test cases
    [1, 4, 2],
    [3, 1, 1],
  ])("示例%#", (x, y, expected) => {
    expect(fn(x, y)).toEqual(expected);
  });
}
