import { ListNode } from "~/utils/listNode";

/**
 * 计算链表长度
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @param n {number}
 * @return {ListNode | null}
 */
export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (head === null) return null;

  let length = 0;
  let listNode = new ListNode(0, head);
  let main = listNode;

  while (main.next) {
    length++;
    main = main.next;
  }

  main = listNode;
  const prevIdx = length - n;
  for (let i = 0; i < length; i++) {
    if (i === prevIdx) {
      main.next = main.next.next;
      break;
    }

    main = main.next;
  }

  return listNode.next;
}

/**
 * 快慢指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @param n {number}
 * @return {ListNode | null}
 */
export function removeNthFromEnd2(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (head === null) return null;

  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    return head.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
}
