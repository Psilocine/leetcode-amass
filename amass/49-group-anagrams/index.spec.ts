import { describe, expect, it } from "vitest";
import { groupAnagrams, groupAnagrams2 } from ".";

describe("字母异位词分组", () => {
  describe("排序", () => {
    testCase(groupAnagrams);
  });

  describe("计数", () => {
    testCase(groupAnagrams2);
  });
});

function testCase(fn: (strs: string[]) => string[][]) {
  it.each([
    // test cases
    [
      ["eat", "tea", "tan", "ate", "nat", "bat"],
      [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    ],
    [[""], [[""]]],
    [["a"], [["a"]]],
  ])("示例%#", (strs, expected) => {
    expect(fn(strs).length).toEqual(expected.length);
  });
}
