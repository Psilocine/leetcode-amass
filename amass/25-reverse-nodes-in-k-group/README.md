# 25. K 个一组翻转链表

> 难度：困难
>
> https://leetcode.cn/problems/reverse-nodes-in-k-group/

## 题目

给你链表的头节点 head ，每  k  个节点一组进行翻转，请你返回修改后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是  k  的整数倍，那么请将最后剩余的节点保持原有顺序。

你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/177129496-b6d10667-d4ee-49f9-bda6-5bd55beeff14.png)

```
输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/177129500-7156489e-1669-4bba-ba48-124de15c1661.png)

```
输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]
```

提示：

- 链表中的节点数目为 n
- 1 <= k <= n <= 5000
- 0 <= Node.val <= 1000

进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？

## 解答

```typescript
import { ListNode } from "~/utils/listNode";

/**
 * 模拟
 * dummy -> 已翻转 -> 待翻转 -> 未翻转 -> null
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @param k {number}
 * @returns {ListNode | null}
 */
export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;

  let prev = dummy;
  let end = dummy;

  while (end.next !== null) {
    // 循环 k 次，找到需要反转的链表结尾
    for (let i = 0; i < k && end !== null; i++) end = end.next;
    if (end === null) break;

    // 记录待翻转的头节点
    let start = prev.next;
    // 记录待翻转的尾部
    let next = end.next;

    // 断开链表
    end.next = null;

    // 翻转链表
    prev.next = reverse(start);

    // 翻转后头节点编导最后，通过 .next 把断开的链表重新链接
    start.next = next;
    // 将 prev 换成下次要翻转的链表的头节点的上一个节点，即 start
    prev = start;

    // 翻转结束，将 end 置为下次要翻转的链表的头节点的上一个节点，即start
    end = prev;
  }

  return dummy.next;
}

function reverse(head: ListNode): ListNode {
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
