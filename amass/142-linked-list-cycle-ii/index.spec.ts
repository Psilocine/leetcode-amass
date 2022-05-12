import { describe, expect, it } from "vitest";
import { createCycleListNode, ListNode } from "~/utils/listNode";
import { detectCycle, detectCycle2 } from ".";

describe("环形链表 II", () => {
  describe("哈希表", () => {
    testCase(detectCycle);
  });
  describe("快慢指针", () => {
    testCase(detectCycle2);
  });
});

function testCase(fn: (head: ListNode | null) => ListNode | null) {
  it.each([
    // test cases
    [[3, 2, 0, -4], 1],
    [[1, 2], 0],
    [[1], -1],
  ])("示例%#", (head, pos) => {
    const node = createCycleListNode(head, pos);

    if (pos === -1) {
      expect(fn(node)).toBeNull();
    } else {
      let expected = node;

      while (pos > 0) {
        expected = expected!.next;
        pos--;
      }

      expect(fn(node)).toBe(expected);
    }
  });
}
