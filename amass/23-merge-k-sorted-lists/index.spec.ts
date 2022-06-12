import { describe, expect, it } from "vitest";
import { createListNode, ListNode } from "~/utils/listNode";
import { mergeKLists } from ".";

describe("合并K个升序链表", () => {
  describe("mergeKLists", () => {
    testCase(mergeKLists);
  });
});

function testCase(fn: (lists: Array<ListNode | null>) => ListNode | null) {
  it.each([
    // test cases
    [
      [
        [1, 4, 5],
        [1, 3, 4],
        [2, 6],
      ],
      [1, 1, 2, 3, 4, 4, 5, 6],
    ],
    [[], []],
    [[[]], []],
  ])("示例%#", (arr, expected) => {
    const lists = arr.map((i) => createListNode(i));
    expect(fn(lists)).toEqual(createListNode(expected));
  });
}
