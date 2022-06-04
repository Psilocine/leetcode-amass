import { describe, expect, it } from "vitest";
import { numUniqueEmails } from ".";

describe("独特的电子邮件地址", () => {
  describe("Name of the group", () => {
    testCase(numUniqueEmails);
  });
});

function testCase(fn: (emails: string[]) => number) {
  it.each([
    // test cases
    [
      [
        "test.email+alex@leetcode.com",
        "test.e.mail+bob.cathy@leetcode.com",
        "testemail+david@lee.tcode.com",
      ],
      2,
    ],
    [["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"], 3],
  ])("示例%#", (emails, expected) => {
    expect(fn(emails)).toBe(expected);
  });
}
