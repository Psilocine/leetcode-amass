import { describe, expect, it } from "vitest";
import { minimumAbsDifference } from ".";

describe("最小绝对差", () => {
  describe("排序 + 一次遍历", () => {
    testCase(minimumAbsDifference);
  });
});

function testCase(fn: (arr: number[]) => number[][]) {
  it.each([
    // test cases
    [
      [4, 2, 1, 3],
      [
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    ],
    [[1, 3, 6, 10, 15], [[1, 3]]],
    [
      [3, 8, -10, 23, 19, -4, -14, 27],
      [
        [-14, -10],
        [19, 23],
        [23, 27],
      ],
    ],
  ])("示例%#", (arr, expected) => {
    expect(fn(arr)).toEqual(expected);
  });
}
