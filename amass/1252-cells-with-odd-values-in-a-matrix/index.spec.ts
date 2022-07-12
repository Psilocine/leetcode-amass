import { describe, expect, it } from "vitest";
import { oddCells, oddCells2, oddCells3 } from ".";

describe("奇数值单元格的数目", () => {
  describe("模拟", () => {
    testCase(oddCells);
  });
  describe("模拟 + 空间优化", () => {
    testCase(oddCells2);
  });

  describe("计数模拟", () => {
    testCase(oddCells3);
  });
});

function testCase(fn: (m: number, n: number, indices: number[][]) => number) {
  it.each([
    // test cases
    [
      2,
      3,
      [
        [0, 1],
        [1, 1],
      ],
      6,
    ],
    [
      2,
      2,
      [
        [1, 1],
        [0, 0],
      ],
      0,
    ],
  ])("示例%#", (m, n, indices, expected) => {
    expect(fn(m, n, indices)).toEqual(expected);
  });
}
