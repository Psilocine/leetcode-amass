import { describe, expect, it } from "vitest";
import { duplicateZeros, duplicateZeros2 } from ".";

describe("复写零", () => {
  describe("一次遍历", () => {
    testCase(duplicateZeros);
  });

  describe("栈思想辅助", () => {
    testCase(duplicateZeros2);
  });
});

function testCase(fn: (arr: number[]) => number[]) {
  it.each([
    // test cases
    [
      [1, 0, 2, 3, 0, 4, 5, 0],
      [1, 0, 0, 2, 3, 0, 0, 4],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
  ])("示例%#", (arr, expected) => {
    expect(fn(arr)).toEqual(expected);
  });
}
