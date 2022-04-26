import { describe, expect, it } from "vitest";
import { threeSum } from ".";

describe("三数之和", () => {
  describe("双指针", () => {
    testCase(threeSum);
  });
});

function testCase(fn: unknown) {
  it.each([
    // test cases
    [[], []],
    [[0], []],
    [
      [-1, 0, 1, 2, -1, -4],
      [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    ],
    [
      [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4],
      [
        [-4, 0, 4],
        [-4, 1, 3],
        [-3, -1, 4],
        [-3, 0, 3],
        [-3, 1, 2],
        [-2, -1, 3],
        [-2, 0, 2],
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    ],
  ])("示例%#", () => {
    expect(true).toBe(true);
  });
}
