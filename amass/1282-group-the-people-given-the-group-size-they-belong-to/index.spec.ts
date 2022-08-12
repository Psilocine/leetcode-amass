import { describe, expect, it } from "vitest";
import { groupThePeople } from ".";

describe("用户分组", () => {
  describe("哈希表", () => {
    testCase(groupThePeople);
  });
});

function testCase(fn: (groupSizes: number[]) => number[][]) {
  it.each([
    // test cases
    [
      [3, 3, 3, 3, 3, 1, 3],
      [[5], [0, 1, 2], [3, 4, 6]],
    ],
    [
      [2, 1, 3, 3, 3, 2],
      [[1], [0, 5], [2, 3, 4]],
    ],
  ])("示例%#", (groupSizes, expected) => {
    expect(fn(groupSizes)).toEqual(expected);
  });
}
