import { describe, expect, it } from "vitest";
import { leastInterval } from ".";

describe("任务调度器", () => {
  describe('矩阵', () => {
    testCase(leastInterval)
  });
});

function testCase(fn: (tasks: string[], n: number) => number) {
  it.each([
    // test cases
    [["A", "A", "A", "B", "B", "B"], 2, 8],
    [["A", "A", "A", "B", "B", "B"], 0, 6],
    [["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2, 16],
  ])("示例%#", (tasks, n, expected) => {
    expect(fn(tasks, n)).toEqual(expected);
  });
}
