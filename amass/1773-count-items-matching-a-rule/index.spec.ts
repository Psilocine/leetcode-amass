import { describe, expect, it } from "vitest";
import { countMatches } from ".";

describe("统计匹配检索规则的物品数量", () => {
  describe("模拟", () => {
    testCase(countMatches);
  });
});

function testCase(
  fn: (items: string[][], ruleKey: string, ruleValue: string) => number
) {
  it.each([
    // test cases
    [
      [
        ["phone", "blue", "pixel"],
        ["computer", "silver", "lenovo"],
        ["phone", "gold", "iphone"],
      ],
      "color",
      "silver",
      1,
    ],
    [
      [
        ["phone", "blue", "pixel"],
        ["computer", "silver", "phone"],
        ["phone", "gold", "iphone"],
      ],
      "type",
      "phone",
      2,
    ],
  ])("示例%#", (items, ruleKey, ruleValue, expected) => {
    expect(fn(items, ruleKey, ruleValue)).toBe(expected);
  });
}
