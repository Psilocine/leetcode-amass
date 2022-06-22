import { describe, expect, it } from "vitest";
import { createListNode, ListNode } from "~/utils/listNode";
import { reverseBetween } from ".";

describe("反转链表 II", () => {
  describe("一次遍历", () => {
    testCase(reverseBetween);
  });
});

function testCase(
  fn: (head: ListNode | null, left: number, right: number) => ListNode | null
) {
  it.each([
    // test cases
    [[1, 2, 3, 4, 5], 2, 4, [1, 4, 3, 2, 5]],
    [[5], 1, 1, [5]],
  ])("示例%#", (head, left, right, expected) => {
    expect(fn(createListNode(head), left, right)).toEqual(
      createListNode(expected)
    );
  });
}
