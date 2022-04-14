import { ListNode } from "~/utils/listNode";

/**
 * 递归
 *
 * @desc 时间复杂度 O(m+n) 空间复杂度 O(m+n)
 * @param list1
 * @param list2
 * @return {ListNode | Null}
 */
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  const deep = (l1, l2) => {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
      l1.next = deep(l1.next, l2);
      return l1;
    } else {
      l2.next = deep(l1, l2.next);
      return l2;
    }
  };

  return deep(list1, list2);
}

/**
 * 迭代
 *
 * @desc 时间复杂度 O(m+n) 空间复杂度 O(1)
 * @param list1
 * @param list2
 * @return {ListNode | Null}
 */
export function mergeTwoLists2(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const head = { next: null };
  let main = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      main.next = list1;
      list1 = list1.next;
    } else {
      main.next = list2;
      list2 = list2.next;
    }
    main = main.next;
  }

  if (list1) {
    main.next = list1;
  }
  if (list2) {
    main.next = list2;
  }

  return head.next;
}
