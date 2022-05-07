import { describe, expect, it } from "vitest";
import { uniquePaths } from '.'

describe("不同路径", () => {
  describe('Name of the group', () => {
    testCase(uniquePaths);
  });
});

function testCase(fn: (m: number, n: number) => number) {
  it.each([
    // test cases
    [3, 7, 28],
    [3, 2, 3],
    [3, 3, 6],
    [19, 13, 86493225],
  ])("示例%#", (m, n, expected) => {
    expect(fn(m, n)).toEqual(expected);
  });
}
