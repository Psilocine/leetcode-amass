import { describe, expect, it } from "vitest";
import { interpret } from ".";

describe("设计 Goal 解析器", () => {
  describe("模拟", () => {
    testCase(interpret);
  });
});

function testCase(fn: (command: string) => string) {
  it.each([
    // test cases
    ["G()(al)", "Goal"],
    ["G()()()()(al)", "Gooooal"],
    ["(al)G(al)()()G", "alGalooG"],
  ])("示例%#", (command, expected) => {
    expect(fn(command)).toBe(expected);
  });
}
