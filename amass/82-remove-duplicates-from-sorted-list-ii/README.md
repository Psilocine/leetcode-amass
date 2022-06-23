# 82. 删除排序链表中的重复元素 II

> 难度：中等
>
> https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/

## 题目

给定一个已排序的链表的头  head ，  删除原始链表中所有重复数字的节点，只留下不同的数字  。返回 已排序的链表  。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/174957270-220c6f20-57a9-4429-8e1a-ea97e2462dd8.png)

```
输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/174957276-b4d6d05d-bb3d-4157-bc69-01b44365dab5.png)

```
输入：head = [1,1,1,2,3]
输出：[2,3]
```

提示：

- 链表中节点数目在范围 [0, 300] 内
- -100 <= Node.val <= 100
- 题目数据保证链表已经按升序 排列

## 解答

```typescript
/**
 * 一次遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let dummy = new ListNode();
  dummy.next = head;

  let cur = dummy;

  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const val = cur.next.val;

      while (cur.next && cur.next.val === val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}
```
