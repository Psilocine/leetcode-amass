import { describe, expect, it } from "vitest";
import { combine } from ".";

describe("组合", () => {
  describe("回溯 dfs", () => {
    testCase(combine);
  });
});

function testCase(fn: (n: number, k: number) => number[][]) {
  it.each([
    // test cases
    [
      4,
      2,
      [
        [2, 4],
        [3, 4],
        [2, 3],
        [1, 2],
        [1, 3],
        [1, 4],
      ],
    ],
    [1, 1, [[1]]],
  ])("示例%#", (n, k, expected) => {
    expect(fn(n, k).length).toBe(expected.length);
  });
}
