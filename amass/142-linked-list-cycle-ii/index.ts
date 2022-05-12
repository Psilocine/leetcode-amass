import { ListNode } from "~/utils/listNode";

/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  const map = new Map();
  let node = head;
  while (node) {
    if (map.get(node)) {
      return node;
    } else {
      map.set(node, true);
    }
    node = node.next;
  }

  return null;
}

/**
 * 快慢指针
 * slow * 2 = fast
 * slow = a + b (a 为环外距离，b 为环上快慢指针相遇的点， c 为环 - 相遇的点，即剩余的环距离)
 * fast = a + b + c + b
 * 2 * (a + b) = a + 2b + c
 * a = c
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function detectCycle2(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  let slow = head;
  let fast = head;
  while (fast !== null) {
    slow = slow.next;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (fast === slow) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
}
