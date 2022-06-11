import { describe, expect, it } from "vitest";
import { minFlipsMonoIncr, minFlipsMonoIncr2 } from ".";

describe("将字符串翻转到单调递增", () => {
  describe("动态规划", () => {
    testCase(minFlipsMonoIncr);
  });
  describe("动态规划 - 优化空间", () => {
    testCase(minFlipsMonoIncr2);
  });
});

function testCase(fn: (s: string) => number) {
  it.each([
    // test cases
    ["010110", 2],
    ["00011000", 2],
    ["00110", 1],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toBe(expected);
  });
}
