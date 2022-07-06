import { describe, expect, it } from "vitest";
import { validMountainArray } from ".";

describe("有效的山脉数组", () => {
  describe("双指针 + 遍历", () => {
    testCase(validMountainArray);
  });
});

function testCase(fn: (arr: number[]) => boolean) {
  it.each([
    // test cases
    [[2, 1], false],
    [[3, 5, 5], false],
    [[0, 3, 2, 1], true],
  ])("示例%#", (arr, expected) => {
    expect(fn(arr)).toBe(expected);
  });
}
