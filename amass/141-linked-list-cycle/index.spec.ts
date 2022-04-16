import { describe, expect, it } from "vitest";
import { createCycleListNode, ListNode } from "~/utils/listNode";
import { hasCycle, hasCycle2, hasCycle3 } from ".";

describe("环形链表", () => {
  describe("哈希表", () => {
    testCase(hasCycle);
  });
  describe('标记法', () => {
    testCase(hasCycle3);
  });
  describe("双指针", () => {
    testCase(hasCycle2);
  });
});

function testCase(fn: (head: ListNode | null) => boolean) {
  it.each([
    // test cases
    [[3, 2, 0, -4], 1, true],
    [[1, 2], 0, true],
    [[1], -1, false],
  ])("示例%#", (head, pos, expected) => {
    expect(fn(createCycleListNode(head, pos))).toBe(expected);
  });
}
