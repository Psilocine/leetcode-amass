import { describe, expect, it } from "vitest";
import { plusOne } from ".";

describe("加一", () => {
  describe("plusOne", () => {
    testCase(plusOne);
  });
});

function testCase(fn: (digits: number[]) => number[]) {
  it.each([
    // test cases
    [
      [1, 2, 3],
      [1, 2, 4],
    ],
    [
      [4, 3, 2, 1],
      [4, 3, 2, 2],
    ],
    [[0], [1]],
    [[9], [1, 0]],
  ])("示例%#", (digits, expected) => {
    expect(fn(digits)).toEqual(expected);
  });
}
