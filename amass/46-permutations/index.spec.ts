import { describe, expect, it } from "vitest";
import { permute } from '.'

describe("全排列", () => {
  describe('回溯', () => {
    testCase(permute
      )
  });
});

function testCase(fn: (nums: number[]) => number[][]) {
  it.each([
    // test cases
    [
      [1, 2, 3],
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    ],
    [
      [0, 1],
      [
        [0, 1],
        [1, 0],
      ],
    ],
    [[1], [[1]]]
  ])("示例%#", (nums, expected) => {
    expect(fn(nums).length).toEqual(expected.length);
  });
}
