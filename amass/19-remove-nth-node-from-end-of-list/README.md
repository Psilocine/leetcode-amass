# 19. 删除链表的倒数第 N 个结点

> 难度：中等
>
> https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

## 题目

给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/165288554-efdb3b27-9828-4c6b-a9bd-def1faab70e1.png)

```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

**示例 2**

```
输入：head = [1], n = 1
输出：[]
```

**示例 3**

```
输入：head = [1,2], n = 1
输出：[1]
```

**提示：**

- 链表中结点的数目为 sz
- 1 <= sz <= 30
- 0 <= Node.val <= 100
- 1 <= n <= sz

**进阶：**

你能尝试使用一趟扫描实现吗？

## 解答

```typescript
import { ListNode } from "~/utils/listNode";

/**
 * 计算链表长度
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @param n {number}
 * @return {ListNode | null}
 */
export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (head === null) return null;

  let length = 0;
  let listNode = new ListNode(0, head);
  let main = listNode;

  while (main.next) {
    length++;
    main = main.next;
  }

  main = listNode;
  const prevIdx = length - n;
  for (let i = 0; i < length; i++) {
    if (i === prevIdx) {
      main.next = main.next.next;
      break;
    }

    main = main.next;
  }

  return listNode.next;
}

/**
 * 快慢指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @param n {number}
 * @return {ListNode | null}
 */
export function removeNthFromEnd2(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (head === null) return null;

  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    return head.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
}
```
