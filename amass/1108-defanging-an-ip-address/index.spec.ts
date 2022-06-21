import { describe, expect, it } from "vitest";
import { defangIPaddr } from ".";

describe("IP 地址无效化", () => {
  describe("正则匹配", () => {
    testCase(defangIPaddr);
  });
});

function testCase(fn: (address: string) => string) {
  it.each([
    // test cases
    ["1.1.1.1", "1[.]1[.]1[.]1"],
    ["255.100.50.0", "255[.]100[.]50[.]0"],
  ])("示例%#", (address, expected) => {
    expect(fn(address)).toBe(expected);
  });
}
