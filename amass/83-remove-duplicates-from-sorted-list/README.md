# 83. 删除排序链表中的重复元素

> 难度：简单
>
> https://leetcode.cn/problems/remove-duplicates-from-sorted-list/

## 题目

给定一个已排序的链表的头  head ，  删除所有重复的元素，使每个元素只出现一次  。返回 已排序的链表  。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/183448914-fd76c3be-f706-4272-b359-bf05ff43e91c.png)

```
输入：head = [1,1,2]
输出：[1,2]
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/183448920-2ced6090-d68c-4b42-bef5-f193b7cdc885.png)

```
输入：head = [1,1,2,3,3]
输出：[1,2,3]
```

提示：

- 链表中节点数目在范围 [0, 300] 内
- -100 <= Node.val <= 100
- 题目数据保证链表已经按升序 排列

## 解答

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "~/utils/listNode";

/**
 * 一次遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  let curr = head;
  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}
```
