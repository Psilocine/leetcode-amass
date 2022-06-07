import { describe, expect, it } from "vitest";
import { reconstructQueue } from ".";

describe("根据身高重建队列", () => {
  describe("reconstructQueue", () => {
    testCase(reconstructQueue);
  });
});

function testCase(fn: (people: number[][]) => number[][]) {
  it.each([
    // test cases
    [
      [
        [7, 0],
        [4, 4],
        [7, 1],
        [5, 0],
        [6, 1],
        [5, 2],
      ],
      [
        [5, 0],
        [7, 0],
        [5, 2],
        [6, 1],
        [4, 4],
        [7, 1],
      ],
    ],
    [
      [
        [6, 0],
        [5, 0],
        [4, 0],
        [3, 2],
        [2, 2],
        [1, 4],
      ],
      [
        [4, 0],
        [5, 0],
        [2, 2],
        [3, 2],
        [1, 4],
        [6, 0],
      ],
    ],
  ])("示例%#", (people, expected) => {
    expect(fn(people)).toEqual(expected);
  });
}
