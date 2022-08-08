import { describe, expect, it } from "vitest";
import { createListNode, ListNode } from "~/utils/listNode";
import { deleteDuplicates } from ".";

describe("删除排序链表中的重复元素", () => {
  describe("遍历", () => {
    testCase(deleteDuplicates);
  });
});

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it.each([
    // test cases
    [
      [1, 1, 2],
      [1, 2],
    ],
    [
      [1, 1, 2, 3, 3],
      [1, 2, 3],
    ],
  ])("示例%#", (head, expected) => {
    expect(fn(createListNode(head))).toEqual(createListNode(expected));
  });
}
