import { ListNode } from "~/utils/listNode";

/**
 * 哈希表
 * 遍历 headA 存进哈希表里，当 headB 节点在哈希表里有值则 true，否则 false
 * @desc 时间复杂度 O(m+n) 空间复杂度 O(m) m 为 headA 的长度
 * @param headA {ListNode | null}
 * @param headB {ListNode | null}
 * @return {ListNode | null}
 */
export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null) {
    return null;
  }
  const map = new Map();
  while (headA) {
    map.set(headA, true);
    headA = headA.next;
  }

  while (headB) {
    if (map.get(headB)) {
      return headB;
    } else {
      headB = headB.next;
    }
  }

  return null;
}

/**
 * 双指针
 *
 * @desc 时间复杂度 O(m+n) 空间复杂度 O(1)
 * @param headA {ListNode | null}
 * @param headB {ListNode | null}
 * @return {ListNode | null}
 */
export function getIntersectionNode2(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }

  return pA;
}

/**
 * 标记法
 *
 * @desc 时间复杂度 O(m+n) 空间复杂度 O(1)
 * @param headA {ListNode | null}
 * @param headB {ListNode | null}
 * @return {ListNode | null}
 */
export function getIntersectionNode3(
  headA: (ListNode & { tag?: boolean }) | null,
  headB: (ListNode & { tag?: boolean }) | null
): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }
  while (headA || headB) {
    if (headA) {
      if (headA.tag) {
        return headA;
      }
      headA.tag = true;
      headA = headA.next;
    }
    if (headB) {
      if (headB.tag) {
        return headB;
      }
      headB.tag = true;
      headB = headB.next;
    }
  }

  return null;
}
