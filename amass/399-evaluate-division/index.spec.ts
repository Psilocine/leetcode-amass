import { describe, expect, it } from "vitest";
import { calcEquation } from ".";

describe("除法求值", () => {
  describe("calcEquation", () => {
    testCase(calcEquation);
  });
});

function testCase(
  fn: (equations: string[][], values: number[], queries: string[][]) => number[]
) {
  it.each([
    // test cases
    [
      [
        ["a", "b"],
        ["b", "c"],
      ],
      [2.0, 3.0],
      [
        ["a", "c"],
        ["b", "a"],
        ["a", "e"],
        ["a", "a"],
        ["x", "x"],
      ],
      [6.0, 0.5, -1.0, 1.0, -1.0],
    ],
    [
      [
        ["a", "b"],
        ["b", "c"],
        ["bc", "cd"],
      ],
      [1.5, 2.5, 5.0],
      [
        ["a", "c"],
        ["c", "b"],
        ["bc", "cd"],
        ["cd", "bc"],
      ],
      [3.75, 0.4, 5.0, 0.2],
    ],
    [
      [["a", "b"]],
      [0.5],
      [
        ["a", "b"],
        ["b", "a"],
        ["a", "c"],
        ["x", "y"],
      ],
      [0.5, 2.0, -1.0, -1.0],
    ],
  ])("示例%#", (equations: string[][], values: number[], queries, expected) => {
    expect(fn(equations, values, queries)).toEqual(expected);
  });
}
