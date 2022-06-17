import { describe, expect, it } from "vitest";
import { solution } from ".";

const bad = 4;
it("第一个版本的错误", () => {
  const fn = solution(isBadVersion);

  expect(fn(5)).toBe(4);
});

function isBadVersion(n: number) {
  if (n < bad) {
    return false;
  }
  return true;
}
