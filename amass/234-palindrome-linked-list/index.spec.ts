import { describe, expect, it } from "vitest";
import { createListNode, ListNode } from "~/utils/listNode";
import { isPalindrome, isPalindrome2 } from ".";

describe("回文链表", () => {
  describe("双指针", () => {
    testCase(isPalindrome);
  });

  describe("快慢指针", () => {
    testCase(isPalindrome2);
  });
});

function testCase(fn: (head: ListNode | null) => boolean) {
  it.each([
    // test cases
    [[1, 2, 2, 1], true],
    [[1,2], false]
  ])("示例%#", (head, expected) => {
    expect(fn(createListNode(head))).toEqual(expected);
  });
}
