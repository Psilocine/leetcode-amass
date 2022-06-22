# 143. 重排链表

> 难度：中等
>
> https://leetcode.cn/problems/reorder-list/

## 题目

给定一个单链表 L 的头节点 head ，单链表 L 表示为：

L0 → L1 → … → Ln - 1 → Ln
请将其重新排列后变为：

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/174981017-5d2bbb96-3b68-4eb0-95c6-8e6d5a59fe07.png)

```
输入：head = [1,2,3,4]
输出：[1,4,2,3]
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/174981214-6aac1de1-6eec-443b-886f-53b6872e59a4.png)

```
输入：head = [1,2,3,4,5]
输出：[1,5,2,4,3]
```

## 解答

```typescript
/**
 * 快慢指针 遍历
 * 快慢指针寻找中点，反转右半部分的链表，再进行重组
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function reorderList(head: ListNode | null): ListNode | null {
  if (!head.next) {
    return;
  }
  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy,
    fast = dummy;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let right = slow.next;
  slow.next = null;
  let left = dummy.next;

  right = reverseList(right);

  while (left && right) {
    const lNext = left.next;
    const rNext = right.next;

    right.next = left.next;
    left.next = right;

    left = lNext;
    right = rNext;
  }

  return head;
}

function reverseList(head: ListNode): ListNode {
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
```
