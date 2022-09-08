import { describe, expect, it } from "vitest";
import { numSpecial } from ".";

describe("二进制矩阵中的特殊位置", () => {
  describe("模拟", () => {
    testCase(numSpecial);
  });
});

function testCase(fn: (mat: number[][]) => number) {
  it.each([
    // test cases
    [
      [
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 0],
      ],
      1,
    ],
    [
      [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      3,
    ],
    [
      [
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ],
      2,
    ],
    [
      [
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1],
      ],
      3,
    ],
  ])("示例%#", (mat, expected) => {
    expect(fn(mat)).toBe(expected);
  });
}
