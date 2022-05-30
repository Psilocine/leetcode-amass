import { describe, expect, it } from "vitest";
import { solveNQueens } from ".";

describe("N 皇后", () => {
  describe("dfs - 回溯", () => {
    testCase(solveNQueens);
  });
});

function testCase(fn: (n: number) => string[][]) {
  it.each([
    // test cases
    [
      4,
      [
        [".Q..", "...Q", "Q...", "..Q."],
        ["..Q.", "Q...", "...Q", ".Q.."],
      ],
    ],
    [1, [["Q"]]],
  ])("示例%#", (n, expected) => {
    expect(fn(n)).toEqual(expected);
  });
}
