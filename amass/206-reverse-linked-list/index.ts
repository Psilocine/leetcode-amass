import { ListNode } from "~/utils/listNode";

/**
 * 迭代
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;
  while(curr) {
    const next= curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;

  }

  return prev;
};

/**
 * 递归
 * 假设 n1 -> ... nk -> n(k+1) <- ... nm <- null
 * n(k+1) 下一个节点指向 nk
 * 需要 nk.next.next = nk
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function reverseList2(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }
  const newHead = reverseList2(head.next);

  head.next.next = head; // nk 指向
  head.next = null; // n1 指向

  return newHead;
};