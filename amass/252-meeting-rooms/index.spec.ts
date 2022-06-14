import { describe, expect, it } from "vitest";
import { canAttendMeetings } from ".";

describe("会议室", () => {
  describe("排序 + 遍历", () => {
    testCase(canAttendMeetings);
  });
});

function testCase(fn: (intervals: number[][]) => boolean) {
  it.each([
    // test cases
    [
      [
        [0, 30],
        [5, 10],
        [15, 20],
      ],
      false,
    ],
    [
      [
        [7, 10],
        [2, 4],
      ],
      true,
    ],
  ])("示例%#", (intervals, expected) => {
    expect(fn(intervals)).toBe(expected);
  });
}
