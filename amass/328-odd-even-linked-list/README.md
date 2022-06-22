# 328. 奇偶链表

> 难度：中等
>
> https://leetcode.cn/problems/odd-even-linked-list/

## 题目

给定单链表的头节点  head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。

第一个节点的索引被认为是 奇数 ， 第二个节点的索引为   偶数 ，以此类推。

请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。

你必须在  O(1)  的额外空间复杂度和  O(n)  的时间复杂度下解决这个问题。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/174986491-3d140241-4c72-495f-b882-b0b410a364d6.png)

```
输入: head = [1,2,3,4,5]
输出: [1,3,5,2,4]
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/174986495-0a302ead-2939-44b9-96f6-dae2a69a5d55.png)

```
输入: head = [2,1,3,5,6,4,7]
输出: [2,3,6,7,1,5,4]
```

## 解答

```typescript
/**
 * 分离后遍历合并
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @returns {ListNode | null}
 */
export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  const dummy = new ListNode();

  dummy.next = head;

  let odd = dummy.next;
  let oddHead = head;

  let even = dummy.next.next;
  let evenHead = head.next;

  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return oddHead;
}
```
