import { describe, expect, it } from "vitest";
import { dailyTemperatures, dailyTemperatures2 } from ".";

describe("每日温度", () => {
  describe("暴力破解", () => {
    testCase(dailyTemperatures);
  });
  describe('单调栈', () => {
    testCase(dailyTemperatures2);
  });
});

function testCase(fn: (temperatures: number[]) => number[]) {
  it.each([
    // test cases
    [
      [73, 74, 75, 71, 69, 72, 76, 73],
      [1, 1, 4, 2, 1, 1, 0, 0],
    ],
    [
      [30, 40, 50, 60],
      [1, 1, 1, 0],
    ],
    [
      [30, 60, 90],
      [1, 1, 0],
    ],
  ])("示例%#", (temperatures, expected) => {
    expect(fn(temperatures)).toEqual(expected);
  });
}
