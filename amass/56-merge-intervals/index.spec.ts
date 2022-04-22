import { describe, expect, it } from "vitest";
import { merge, merge2 } from ".";

describe("合并区间", () => {
  describe("栈 - 双指针", () => {
    testCase(merge);
  });

  describe("双指针", () => {
    testCase(merge2);
  });
});

function testCase(fn: (intervals: number[][]) => number[][]) {
  it.each([
    // test cases
    [
      [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ],
      [
        [1, 6],
        [8, 10],
        [15, 18],
      ],
    ],
    [
      [
        [1, 4],
        [2, 3],
      ],
      [[1, 4]],
    ],
    [
      [
        [1, 4],
        [4, 5],
      ],
      [[1, 5]],
    ],
  ])("示例%#", (intervals, expected) => {
    expect(fn(intervals)).toEqual(expected);
  });
}
