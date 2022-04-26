import { describe, expect, it } from "vitest";
import { createListNode, ListNode } from "~/utils/listNode";
import { removeNthFromEnd, removeNthFromEnd2 } from ".";

describe("删除链表的倒数第 N 个结点", () => {
  describe("计算链表长度", () => {
    testCase(removeNthFromEnd);
  });

  describe("快慢指针", () => {
    testCase(removeNthFromEnd2);
  });
});

function testCase(fn: (head: ListNode | null, n: number) => ListNode | null) {
  it.each([
    // test cases
    [[1, 2, 3, 4, 5], 2, [1, 2, 3, 5]],
    [[1], 1, []],
    [[1, 2], 1, [1]],
  ])("示例%#", (head, n, expected) => {
    expect(fn(createListNode(head), n)).toEqual(createListNode(expected));
  });
}
