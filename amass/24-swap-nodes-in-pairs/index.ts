import { ListNode } from "~/utils/listNode";

/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  // 不满足两个节点不进行置换
  if (!head || !head.next) {
    return head;
  }

  // 第二节点作为头节点
  const newHead = head.next;

  // 下一组
  head.next = swapPairs(newHead.next);

  // 切断第二节点
  newHead.next = head;

  return newHead;
}

/**
 * 迭代
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function swapPairs2(head: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    const next = head.next;
    head.next = next.next;
    next.next = head;
    prev.next = next;

    prev = head;
    head = head.next;
  }

  return dummy.next;
}
