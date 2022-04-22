import { createListNode, ListNode } from "~/utils/listNode";

/**
 * 迭代
 * @desc 时间复杂度 O(max(m,n)) 空间复杂度 O(max(m n))
 * @param l1
 * @param l2
 * @returns
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null && l2 === null) {
    return null;
  }

  let head = null;
  let tail = null;
  
  let sum = 0;
  let curry = 0;

  while (l1 || l2) {
    let n1 = l1 ? l1.val : 0;
    let n2 = l2 ? l2.val : 0;

    sum = n1 + n2 + curry;
    curry = Math.floor(sum / 10);
    sum %= 10;

    if (!head) {
      head = tail = new ListNode(sum);
    } else {
      tail.next = new ListNode(sum);

      tail = tail.next;
    }

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  if (curry) tail.next = new ListNode(1);

  return head;
}
