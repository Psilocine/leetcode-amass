import { describe, expect, it } from "vitest";
import { createListNode, ListNode } from "~/utils/listNode";
import { sortList, sortList2, sortList3 } from ".";

describe("排序链表", () => {
  describe("排序", () => {
    testCase(sortList);
  });

  describe("归并 - 自顶向下", () => {
    testCase(sortList2);
  });

  describe("归并 - 自底向上", () => {
    testCase(sortList3);
  });
});

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it.each([
    // test cases
    [
      [4, 2, 1, 3],
      [1, 2, 3, 4],
    ],
    [
      [-1, 5, 3, 4, 0],
      [-1, 0, 3, 4, 5],
    ],
    [[], []],
  ])("示例%#", (head, expected) => {
    expect(fn(createListNode(head))).toEqual(createListNode(expected));
  });
}
