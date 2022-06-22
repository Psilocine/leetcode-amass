# 24. 两两交换链表中的节点

> 难度：中等
>
> https://leetcode.cn/problems/swap-nodes-in-pairs/

## 题目

给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/174999073-4dc1bb02-85ce-4d96-8ea0-7e3c28754eaf.png)

```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```

**示例 2**

```
输入：head = []
输出：[]
```

**示例 3**

```
输入：head = [1]
输出：[1]
```

## 解答

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  // 不满足两个节点不进行置换
  if (!head || !head.next) {
    return head;
  }

  // 第二节点作为头节点
  const newHead = head.next;

  // 下一组
  head.next = swapPairs(newHead.next);

  // 切断第二节点
  newHead.next = head;

  return newHead;
}

/**
 * 迭代
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function swapPairs2(head: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    const next = head.next;
    head.next = next.next;
    next.next = head;
    prev.next = next;

    prev = head;
    head = head.next;
  }

  return dummy.next;
}
```
