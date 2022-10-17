import { describe, expect, it } from "vitest";
import { totalFruit } from ".";

describe("水果成篮", () => {
  describe("滑动窗口", () => {
    testCase(totalFruit);
  });
});

function testCase(fn: (fruits: number[]) => number) {
  it.each([
    // test cases
    [[1, 2, 1], 3],
    [[0, 1, 2, 2], 3],
    [[1, 2, 3, 2, 2], 4],
    [[3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4], 5],
  ])("示例%#", (fruits, expected) => {
    expect(fn(fruits)).toBe(expected);
  });
}
