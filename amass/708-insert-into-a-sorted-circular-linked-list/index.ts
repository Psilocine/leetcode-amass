/**
 * Definition for node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     constructor(val?: number, next?: Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.next = (next===undefined ? null : next);
 *     }
 * }
 */
import { ListNode as Node } from "~/utils/listNode";
/**
 * 一次遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {Node | null}
 * @param insertVal {number}
 * @returns {Node | null}
 */
export function insert(head: Node | null, insertVal: number): Node | null {
  const node = new Node(insertVal);
  if (!head) {
    node.next = node;
    return node;
  }

  if (head.next === head) {
    head.next = node;
    node.next = head;
    return head;
  }

  let curr = head,
    next = head.next;
  while (next !== head) {
    if (insertVal >= curr.val && insertVal <= next.val) {
      break;
    }

    if (curr.val > next.val) {
      if (insertVal > curr.val || insertVal < next.val) {
        break;
      }
    }

    curr = curr.next;
    next = next.next;
  }

  curr.next = node;
  node.next = next;

  return head;
}
