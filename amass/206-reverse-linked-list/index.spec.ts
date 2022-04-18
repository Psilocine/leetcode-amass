import { describe, expect, it } from "vitest";
import { createListNode, ListNode } from "~/utils/listNode";
import { reverseList, reverseList2 } from ".";
describe("反转链表", () => {
  describe("迭代", () => {
    testCase(reverseList);
  });

  describe("递归", () => {
    testCase(reverseList2);
  });
});

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it.each([
    // test cases
    [
      [1, 2, 3, 4, 5],
      [5, 4, 3, 2, 1],
    ],
    [
      [1, 2],
      [2, 1],
    ],
    [[], []],
  ])("示例%#", (head, expected) => {
    expect(fn(createListNode(head))).toEqual(createListNode(expected));
  });
}
