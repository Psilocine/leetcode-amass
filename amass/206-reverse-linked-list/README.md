# 206. 反转链表

> 难度：简单
>
> https://leetcode-cn.com/problems/reverse-linked-list/

## 题目

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/163834065-b8f68ff0-0622-43df-b80e-6aa03f80d543.png)
```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/163834078-16d9e76e-464b-47f3-8213-bcf93586fe3f.png)

```
输入：head = [1,2]
输出：[2,1]
```

**示例 3**

```
输入：head = []
输出：[]
```

**进阶：**

链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

## 解答
```typescript
import { ListNode } from "~/utils/listNode";

/**
 * 迭代
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;
  while(curr) {
    const next= curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;

  }

  return prev;
};

/**
 * 递归
 * 假设 n1 -> ... nk -> n(k+1) <- ... nm <- null
 * n(k+1) 下一个节点指向 nk
 * 需要 nk.next.next = nk
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function reverseList2(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }
  const newHead = reverseList2(head.next);

  head.next.next = head; // nk 指向
  head.next = null; // n1 指向

  return newHead;
};
```