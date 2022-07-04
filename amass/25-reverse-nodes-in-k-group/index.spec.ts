import { describe, expect, it } from "vitest";
import { createListNode, ListNode } from "~/utils/listNode";
import { reverseKGroup } from ".";

describe("K 个一组翻转链表", () => {
  describe("模拟", () => {
    testCase(reverseKGroup);
  });
});

function testCase(fn: (head: ListNode | null, k: number) => ListNode | null) {
  it.each([
    // test cases
    [[1, 2, 3, 4, 5], 2, [2, 1, 4, 3, 5]],
    [[1, 2, 3, 4, 5], 3, [3, 2, 1, 4, 5]],
  ])("示例%#", (head, k, expected) => {
    expect(fn(createListNode(head), k)).toEqual(createListNode(expected));
  });
}
