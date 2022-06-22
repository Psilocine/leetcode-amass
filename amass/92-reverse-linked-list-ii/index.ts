/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "~/utils/listNode";

/**
 * 一次遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @param left {number}
 * @param right {number}
 * @returns {ListNode | null}
 */
export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;

  let p = dummy;

  for (let i = 0; i < left - 1; i++) {
    p = p.next;
  }
  let leftHead = p;
  let start = leftHead.next;
  let prev = start;
  let curr = prev.next;

  for (let i = left; i < right; i++) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;

    curr = next;
  }

  leftHead.next = prev;
  start.next = curr;

  return dummy.next;
}
