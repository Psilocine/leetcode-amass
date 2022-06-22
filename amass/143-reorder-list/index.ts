import { ListNode } from "~/utils/listNode";

/**
 * 快慢指针 遍历
 * 快慢指针寻找中点，反转右半部分的链表，再进行重组
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null} 
 */
export function reorderList(head: ListNode | null): ListNode | null {
  if (!head.next) {
    return;
  }
  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy,
    fast = dummy;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let right = slow.next;
  slow.next = null;
  let left = dummy.next;

  right = reverseList(right);

  while (left && right) {
    const lNext = left.next;
    const rNext = right.next;

    right.next = left.next;
    left.next = right;

    left = lNext;
    right = rNext;
  }

  return head;
}

function reverseList(head: ListNode): ListNode {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
}
