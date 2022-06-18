import { describe, expect, it } from "vitest";
import { createListNode } from "~/utils/listNode";
import { insert } from ".";
import type { ListNode as Node } from "~/utils/listNode";

describe("循环有序列表的插入", () => {
  describe("遍历", () => {
    testCase(insert);
  });
});

function testCase(fn: (head: Node | null, insertVal: number) => Node | null) {
  it.each([
    // test cases
    [[3, 4, 1], 2, [3, 4, 1, 2]],
    [[], 1, [1]],
    [[1], 0, [1, 0]],
  ])("示例%#", (head, insertVal, expected) => {
    expect(fn(createCycleListNode(head), insertVal)).toStrictEqual(
      createCycleListNode(expected)
    );
  });
}

function createCycleListNode(arr: number[]): Node | null {
  if (arr.length === 0) return null;

  const node = createListNode(arr);

  let tail = node!;
  while (tail.next) tail = tail.next;

  tail.next = node;

  return node;
}
