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
 * 迭代
 * @desc 时间复杂度 O(k^2 * n) 空间复杂度 O(1)
 * @param lists {ListNode[] | null}
 * @returns {ListNode | null}
 */
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let ans: ListNode = null;
  for (let i = 0; i < lists.length; i++) {
    ans = mergeTwoLists(ans, lists[i]);
  }

  return ans;
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null) {
  if (l1 === null || l2 === null) {
    return l1 !== null ? l1 : l2;
  }

  const head = new ListNode(-1);
  let tail = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }

    tail = tail.next;
  }

  tail.next = l1 ? l1 : l2;
  return head.next;
}
