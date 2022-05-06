import { describe, expect, it } from "vitest";
import { numIslands } from ".";

describe("岛屿数量", () => {
  describe("DFS", () => {
    testCase(numIslands);
  });
});

function testCase(fn: (grid: string[][]) => number) {
  it.each([
    [
      [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
      ],
      1,
    ],
    [
      [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
      ],
      3,
    ],
  ])("示例%#", (grid, expected) => {
    expect(fn(grid)).toEqual(expected);
  });
}
