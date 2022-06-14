import { describe, expect, it } from "vitest";
import { minMeetingRooms } from ".";

describe("会议室 II", () => {
  describe("模拟公交", () => {
    testCase(minMeetingRooms);
  });
});

function testCase(fn: (intervals: number[][]) => number) {
  it.each([
    // test cases
    [
      [
        [0, 30],
        [5, 10],
        [15, 20],
      ],
      2,
    ],
    [
      [
        [7, 10],
        [2, 4],
      ],
      1,
    ],
  ])("示例%#", (intervals, expected) => {
    expect(fn(intervals)).toBe(expected);
  });
}
