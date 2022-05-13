# 148. 排序链表

> 难度：中等
>
> https://leetcode.cn/problems/sort-list/

## 题目

给你链表的头结点 `head` ，请将其按 **升序** 排列并返回 **排序后的链表** 。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/168236945-3fcd61a9-c45e-42c0-b8b8-822c3ee02570.png)

```
输入：head = [4,2,1,3]
输出：[1,2,3,4]
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/168236960-7a34d552-5bf5-451c-b3f0-6b8d0545b2db.png)

```
输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
```

**示例 3**

```
输入：head = []
输出：[]
```

**提示**

- 链表中节点的数目在范围  [0, 5 * 104]  内
- -105 <= Node.val <= 105

进阶：你可以在  O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

## 解答

```typescript
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
```
