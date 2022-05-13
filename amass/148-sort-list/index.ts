import { ListNode } from "~/utils/listNode";

/**
 * 排序
 * @desc 时间复杂度 O(n) 空间复杂度 O(n) n 为链表的长度
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function sortList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  const arr: ListNode[] = [];
  while (head) {
    const next = head.next;
    head.next = null;
    arr.push(head);
    head = next;
  }

  arr.sort((a, b) => a.val - b.val);

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }

  return arr[0];
}

/**
 * 自顶向下归并排序
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn) n 为链表的长度
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function sortList2(head: ListNode | null): ListNode | null {
  return toSortList(head, null);
}

function merge(head1: ListNode, head2: ListNode): ListNode {
  const dummyHead = new ListNode(0);

  let temp = dummyHead;
  let temp1 = head1;
  let temp2 = head2;

  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp2 = temp2.next;
    }
    temp = temp.next;
  }

  if (temp1 !== null) {
    temp.next = temp1;
  } else if (temp2 !== null) {
    temp.next = temp2;
  }

  return dummyHead.next;
}

function toSortList(head: ListNode | null, tail: ListNode | null) {
  if (!head) {
    return head;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }

  let slow = head;
  let fast = head;

  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }

  const mid = slow;

  return merge(toSortList(head, mid), toSortList(mid, tail));
}

/**
 * 自底向上归并排序
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(1) n 为链表的长度
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function sortList3(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  let length = 0;
  let node = head;

  while (node !== null) {
    length++;
    node = node.next;
  }

  const dummyHead = new ListNode(0, head);

  for (let subLength = 1; subLength < length; subLength <<= 1) {
    let prev = dummyHead;
    let curr = dummyHead.next;

    while (curr !== null) {
      let head1 = curr;
      for (let i = 1; i < subLength && curr.next !== null; i++) {
        curr = curr.next;
      }
      let head2 = curr.next;
      curr.next = null;
      curr = head2;

      for (
        let i = 1;
        i < subLength && curr !== null && curr.next !== null;
        i++
      ) {
        curr = curr.next;
      }

      let next = null;
      if (curr !== null) {
        next = curr.next;
        curr.next = null;
      }

      const merged = merge(head1, head2);
      prev.next = merged;

      while (prev.next !== null) {
        prev = prev.next;
      }
      curr = next;
    }
  }

  return dummyHead.next;
}
