import { describe, expect, it } from "vitest";
import { distanceBetweenBusStops, distanceBetweenBusStops2 } from ".";

describe("公交站间的距离", () => {
  describe("模拟", () => {
    testCase(distanceBetweenBusStops);
  });
  describe("模拟 - 优化空间", () => {
    testCase(distanceBetweenBusStops2);
  });
});

function testCase(
  fn: (distance: number[], start: number, destination: number) => number
) {
  it.each([
    // test cases
    [[1, 2, 3, 4], 0, 1, 1],
    [[1, 2, 3, 4], 0, 2, 3],
    [[1, 2, 3, 4], 0, 3, 4],
    [[7, 10, 1, 12, 11, 14, 5, 0], 7, 2, 17],
  ])("示例%#", (distance, start, destination, expected) => {
    expect(fn(distance, start, destination)).toBe(expected);
  });
}
