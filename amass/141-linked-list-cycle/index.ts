import { ListNode } from "~/utils/listNode";

/**
 * 哈希表
 *
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param head {ListNode | null}
 * @return {boolean}
 */
export function hasCycle(head: ListNode | null): boolean {
  const map = new Map();

  while (head) {
    const crt = map.get(head);
    if (crt) {
      return true;
    } else {
      map.set(head, true);
    }

    head = head.next;
  }

  return false;
}

/**
 * 双指针
 * 快慢指针/龟兔赛跑
 *
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @return {boolean}
 */
export function hasCycle2(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return false;
  }
  let slow: ListNode = head;
  let fast: ListNode = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

/**
 * 标记法
 * 在 head 上新增属性作标记
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @return {boolean}
 */
export function hasCycle3(
  head: (ListNode & { tag?: boolean }) | null
): boolean {
  while (head) {
    if (head.tag) {
      return true;
    }

    head.tag = true;
    head = head.next;
  }

  return false;
}
