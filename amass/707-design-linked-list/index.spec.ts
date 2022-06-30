import { describe, expect, it } from "vitest";
import { MyLinkedList } from ".";

it("设计链表", () => {
  /**
   * ["MyLinkedList","addAtHead","addAtIndex","get","addAtHead","get","addAtHead","get","get","addAtIndex","addAtTail","addAtHead"]
   * [[],[0],[1,1],[2],[4],[2],[4],[2],[3],[1,6],[1],[0]]
   *
   * [null,null,null,-1,null,1,null,0,1,null,null,null]
   */
  const linkedList = new MyLinkedList();

  expect(linkedList.addAtHead(0)).toBe(undefined);
  expect(linkedList.addAtIndex(1, 1)).toBe(undefined);
  expect(linkedList.get(2)).toBe(-1);
  expect(linkedList.addAtHead(4)).toBe(undefined);
  expect(linkedList.get(2)).toBe(1);
  expect(linkedList.addAtHead(4)).toBe(undefined);
  expect(linkedList.get(2)).toBe(0);
  expect(linkedList.get(3)).toBe(1);
  expect(linkedList.addAtIndex(1, 6)).toBe(undefined);
  expect(linkedList.addAtTail(1)).toBe(undefined);
  expect(linkedList.addAtHead(0)).toBe(undefined);
});
