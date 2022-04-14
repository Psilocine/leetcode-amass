# 21. 合并两个有序链表

> 难度：简单
>
> https://leetcode-cn.com/problems/merge-two-sorted-lists/

## 题目

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

**示例 1**

![](https://user-images.githubusercontent.com/25545052/163303944-2fca1097-0bea-4ea8-8554-d29ba9d8bd87.png)
```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

**示例 2**

```
输入：l1 = [], l2 = []
输出：[]
```

**示例 3**

```
输入：l1 = [], l2 = [0]
输出：[0]
```

## 解法
```typescript
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
```