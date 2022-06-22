# 203. 移除链表元素

> 难度：简单
>
> https://leetcode.cn/problems/remove-linked-list-elements/

## 题目

给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/174991669-69e9c728-f139-4254-9469-f82260544a19.png)

```
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```

**示例 2**

```
输入：head = [], val = 1
输出：[]
```

**示例 3**

```
输入：head = [7,7,7,7], val = 7
输出：[]
```

## 解答

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param head {ListNode | null}
 * @param val {number}
 * @returns {ListNode | null}
 */
export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  if (!head) {
    return head;
  }

  head.next = removeElements(head.next, val);

  return head.val === val ? head.next : head;
}

/**
 * 迭代
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @param val {number}
 * @returns {ListNode | null}
 */
export function removeElements2(
  head: ListNode | null,
  val: number
): ListNode | null {
  if (!head) {
    return head;
  }

  const dummy = new ListNode();
  dummy.next = head;

  let temp = dummy;

  while (temp.next !== null) {
    if (temp.next.val === val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return dummy.next;
}
```
