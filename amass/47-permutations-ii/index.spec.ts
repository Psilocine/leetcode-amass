import { describe, expect, it } from "vitest";
import { permuteUnique } from ".";

describe("全排列 II", () => {
  describe("dfs 回溯", () => {
    testCase(permuteUnique);
  });
});

function testCase(fn: (nums: number[]) => number[][]) {
  it.each([
    // test cases
    [
      [1, 1, 2],
      [
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
      ],
    ],
    [
      [1, 2, 3],
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    ],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(expected);
  });
}
