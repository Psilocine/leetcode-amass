import { describe, expect, it } from "vitest";
import { trap } from ".";

describe("接雨水", () => {
  // TODO
  describe("动态规划", () => {
    // testCase(trap);
  });
  describe("栈", () => {
    // testCase(trap);
  });
  describe("双指针", () => {
    testCase(trap);
  });
});

function testCase(fn: (height: number[]) => number) {
  it.each([
    // test cases
    [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
    [[4, 2, 0, 3, 2, 5], 9],
  ])("示例%#", (height, expected) => {
    expect(fn(height)).toEqual(expected);
  });
}
