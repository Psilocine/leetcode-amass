import { describe, expect, it } from "vitest";
import { makesquare } from ".";

describe("火柴拼正方形", () => {
  describe("回溯 - dfs", () => {
    testCase(makesquare);
  });
});

function testCase(fn: (matchsticks: number[]) => boolean) {
  it.each([
    // test cases
    [[1, 1, 2, 2, 2], true],
    [[3, 3, 3, 3, 4], false],
  ])("示例%#", (matchsticks, expected) => {
    expect(fn(matchsticks)).toBe(expected);
  });
}
