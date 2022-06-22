import { ListNode } from "~/utils/listNode";

/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param head {ListNode | null}
 * @param val {number}
 * @returns {ListNode | null}
 */
export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  if (!head) {
    return head;
  }

  head.next = removeElements(head.next, val);

  return head.val === val ? head.next : head;
}

/**
 * 迭代
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @param val {number}
 * @returns {ListNode | null}
 */
export function removeElements2(
  head: ListNode | null,
  val: number
): ListNode | null {
  if (!head) {
    return head;
  }

  const dummy = new ListNode();
  dummy.next = head;

  let temp = dummy;

  while (temp.next !== null) {
    if (temp.next.val === val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return dummy.next;
}
