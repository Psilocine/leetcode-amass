import { describe, expect, it } from "vitest";
import { restoreIpAddresses } from ".";

describe("复原 IP 地址", () => {
  describe("回溯", () => {
    testCase(restoreIpAddresses);
  });
});

function testCase(fn: (s: string) => string[]) {
  it.each([
    // test cases
    ["25525511135", ["255.255.11.135", "255.255.111.35"]],
    ["0000", ["0.0.0.0"]],
    [
      "101023",
      ["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"],
    ],
  ])("示例%#", (s, expected) => {
    expect(fn(s)).toEqual(expected);
  });
}
