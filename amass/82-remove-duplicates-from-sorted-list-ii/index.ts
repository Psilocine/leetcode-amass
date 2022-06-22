import { ListNode } from "~/utils/listNode";

/**
 * 一次遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let dummy = new ListNode();
  dummy.next = head;

  let cur = dummy;

  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const val = cur.next.val;

      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}
