import { describe, expect, it } from "vitest";
import { createListNode, ListNode } from "~/utils/listNode";
import { reorderList } from ".";

describe("重排链表", () => {
  describe("快慢指针 反转链表 遍历", () => {
    testCase(reorderList);
  });
});

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it.each([
    // test cases
    [
      [1, 2, 3, 4],
      [1, 4, 2, 3],
    ],
    [
      [1, 2, 3, 4, 5],
      [1, 5, 2, 4, 3],
    ],
  ])("示例%#", (head, expected) => {
    expect(fn(createListNode(head))).toEqual(createListNode(expected));
  });
}
