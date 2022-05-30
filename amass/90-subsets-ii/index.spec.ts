import { describe, expect, it } from "vitest";
import { subsetsWithDup } from ".";

describe("子集 II", () => {
  describe("回溯 dfs", () => {
    testCase(subsetsWithDup);
  });
});

function testCase(fn: (nums: number[]) => number[][]) {
  it.each([
    // test cases
    [
      [1, 2, 2],
      [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]],
    ],
    [
      [4, 4, 4, 1, 4],
      [
        [],
        [1],
        [1, 4],
        [1, 4, 4],
        [1, 4, 4, 4],
        [1, 4, 4, 4, 4],
        [4],
        [4, 4],
        [4, 4, 4],
        [4, 4, 4, 4],
      ],
    ],
    [[0], [[], [0]]],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums).length).toEqual(expected.length);
  });
}
