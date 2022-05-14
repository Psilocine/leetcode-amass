import { describe, expect, it } from "vitest";
import { canFinish } from ".";

describe("课程表", () => {
  describe("BFS", () => {
    testCase(canFinish);
  });
});

function testCase(
  fn: (numCourses: number, prerequisites: number[][]) => boolean
) {
  it.each([
    // test cases
    [2, [[1, 0]], true],
    [
      2,
      [
        [1, 0],
        [0, 1],
      ],
      false,
    ],
    [
      5,
      [
        [1, 4],
        [2, 4],
        [3, 1],
        [3, 2],
      ],
      true,
    ],
  ])("示例%#", (numCourses, prerequisites, expected) => {
    expect(fn(numCourses, prerequisites)).toEqual(expected);
  });
}
