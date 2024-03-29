import { describe, expect, it } from "vitest";
import { canBeEqual } from ".";

describe("通过翻转子数组使两个数组相等", () => {
  describe("哈希表", () => {
    testCase(canBeEqual);
  });
});

function testCase(fn: (target: number[], arr: number[]) => boolean) {
  it.each([
    // test cases
    // [[1, 2, 3, 4], [2, 4, 1, 3], true],
    // [[7], [7], true],
    // [[3, 7, 9], [3, 7, 11], false],
    [[1, 2, 2, 3], [1, 1, 2, 3], false],
  ])("示例%#", (target, arr, expected) => {
    expect(fn(target, arr)).toBe(expected);
  });
}
