import { ListNode } from "~/utils/listNode";

/**
 * 模拟
 * dummy -> 已翻转 -> 待翻转 -> 未翻转 -> null
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @param k {number}
 * @returns {ListNode | null}
 */
export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;

  let prev = dummy;
  let end = dummy;

  while (end.next) {
    // 循环 k 次，找到需要反转的链表结尾
    for (let i = 0; i < k && end !== null; i++) end = end.next;
    if (end === null) break;

    // 记录待翻转的头节点
    let start = prev.next;
    // 记录待翻转的尾部
    let next = end.next;

    // 断开链表
    end.next = null;

    // 翻转链表
    prev.next = reverse(start);

    // 翻转后头节点编导最后，通过 .next 把断开的链表重新链接
    start.next = next;
    // 将 prev 换成下次要翻转的链表的头节点的上一个节点，即 start
    prev = start;

    // 翻转结束，将 end 置为下次要翻转的链表的头节点的上一个节点，即start
    end = prev;
  }

  return dummy.next;
}

function reverse(head: ListNode): ListNode {
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
