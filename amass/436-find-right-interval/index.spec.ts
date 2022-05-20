import { describe, expect, it } from "vitest";
import { findRightInterval } from ".";

describe("寻找右区间", () => {
  describe("Name of the group", () => {
    testCase(findRightInterval);
  });
});

function testCase(fn: (intervals: number[][]) => number[]) {
  it.each([
    // test cases
    [[[1, 2]], [-1]],
    [
      [
        [3, 4],
        [2, 3],
        [1, 2],
      ],
      [-1, 0, 1],
    ],
    [
      [
        [1, 4],
        [2, 3],
        [3, 4],
      ],
      [-1, 2, -1],
    ],
  ])("示例%#", (intervals, expected) => {
    expect(fn(intervals)).toEqual(expected);
  });
}
