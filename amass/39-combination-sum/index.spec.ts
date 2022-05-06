import { describe, expect, it } from "vitest";
import { combinationSum } from ".";

describe("组合总和", () => {
  describe("回溯", () => {
    testCase(combinationSum);
  });
});

function testCase(fn: (candidates: number[], target: number) => number[][]) {
  it.each([
    // test cases
    [[2, 3, 6, 7], 7, [[2, 2, 3], [7]]],
    [
      [2, 3, 5],
      8,
      [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ],
    ],
    [[2], 1, []],
  ])("示例%#", (candidates, target, expected) => {
    expect(fn(candidates, target).length).toEqual(expected.length);
  });
}
