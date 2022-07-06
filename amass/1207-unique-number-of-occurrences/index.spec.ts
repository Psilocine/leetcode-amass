import { describe, expect, it } from "vitest";
import { uniqueOccurrences, uniqueOccurrences2 } from ".";

describe("独一无二的出现次数", () => {
  describe("标记", () => {
    testCase(uniqueOccurrences);
  });
  describe("哈希表", () => {
    testCase(uniqueOccurrences2);
  });
});

function testCase(fn: (arr: number[]) => boolean) {
  it.each([
    // test cases
    [[1, 2, 2, 1, 1, 3], true],
    [[1, 2], false],
    [[-3, 0, 1, -3, 1, 1, 1, -3, 10, 0], true],
  ])("示例%#", (arr, expected) => {
    expect(fn(arr)).toBe(expected);
  });
}
