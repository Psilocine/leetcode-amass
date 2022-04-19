# 234. 回文链表

> 难度：简单
>
> https://leetcode-cn.com/problems/palindrome-linked-list/

## 题目

给你一个单链表的头节点 `head`，请你判断该链表是否为回文链表。如果是，返回 `true`；否则，返回 `false`


**示例 1**

![image](https://user-images.githubusercontent.com/25545052/163928173-20ce55a3-65b1-43e6-bc2d-51262ebf7d72.png)

```
输入：head = [1,2,2,1]
输出：true
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/163928194-38424878-37d5-494f-91d5-2b37453050a1.png)

```
输入：head = [1,2]
输出：false
```

**进阶：**

你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

## 解答
```typescript
import { ListNode } from "~/utils/listNode";

/**
 * 双指针
 * 先把链表的 val 遍历一遍，再用双指针指向头尾递增递减遍历
 * 用 res 和 res.reverse 是否相等来判断也可以
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param head {ListNode | null}
 * @return {boolean}
 */
export function isPalindrome(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }
  const res: number[] = [];

  while (head) {
    if (head === null) return;
    res.push(head.val);
    head = head.next;
  }

  for (let i = 0, j = res.length - 1; i < j; i++, j--) {
    if (res[i] !== res[j]) {
      return false;
    }
  }
  return true;
}

/**
 * 快慢指针 - 缺点是判断的时候其他进程不能访问，因为在执行过程中链表会被修改
 * 1. 找到前半部分链表的尾节点
 * 2. 反转后半部分的链表
 * 3. 判断是否回文
 * 4. 反转后半部分的链表（恢复）
 * 5. 返回结果
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @return {boolean}
 */
export function isPalindrome2(head: ListNode | null): boolean {
  if (head === null) {
    return true;
  }

  // 找到前半部分链表
  const frontPartList = endOfFirstHalf(head);
  // 反转后半部分链表
  const backPartList = reverseList(frontPartList.next);

  // 判断是否回文
  let p1 = head;
  let p2 = backPartList;
  let result = true;

  while (result && p2 !== null) {
    if (p1.val !== p2.val) result = false;
    p1 = p1.next;
    p2 = p2.next;
  }

  // 还原后半部分链表
  frontPartList.next = reverseList(backPartList);

  return result;
}

function endOfFirstHalf(head: ListNode) {
  let slow = head,
    fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
function reverseList(head: ListNode) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

```