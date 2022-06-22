import { ListNode } from "~/utils/listNode";

/**
 *
 * @param head
 * @returns
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

  console.log(oddHead, evenHead);

  odd.next = evenHead;

  return oddHead;
}
