import { describe, expect, it } from "vitest";
import { openLock } from ".";

describe("打开转盘锁", () => {
  describe("bfs", () => {
    testCase(openLock);
  });
});

function testCase(fn: (deadends: string[], target: string) => number) {
  it.each([
    // test cases
    [["0201", "0101", "0102", "1212", "2002"], "0202", 6],
    [["8888"], "0009", 1],
    [
      ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"],
      "8888",
      -1,
    ],
  ])("示例%#", (deadends, target, expected) => {
    expect(fn(deadends, target)).toBe(expected);
  });
}
