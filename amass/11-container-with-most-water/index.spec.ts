import { describe, expect, it } from "vitest";
import { maxArea, maxArea2 } from ".";

describe("盛最多水的容器", () => {
  
  describe("暴力破解", () => {
    testCase(maxArea);
  });
  describe("双指针", () => {
    testCase(maxArea2);
  });
});

function testCase(fn: (height: number[]) => number) {
  it.each([
    // test cases
    [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
    [[1, 1], 1],
  ])("示例%#", (height, expected) => {
    expect(fn(height)).toEqual(expected);
  });
}
