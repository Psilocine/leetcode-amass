import { ListNode } from "~/utils/listNode";

/**
 * 分离后遍历合并
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  const dummy = new ListNode();

  dummy.next = head;

  let odd = dummy.next;
  let oddHead = head;

  let even = dummy.next.next;
  let evenHead = head.next;

  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return oddHead;
}
