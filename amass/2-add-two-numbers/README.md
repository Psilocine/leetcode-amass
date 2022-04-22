# 2. 两数相加

> 难度：中等
>
> https://leetcode-cn.com/problems/add-two-numbers/

## 题目

给你两个 **非空** 的链表，表示两个非负的整数。它们每位数字都是按照 **逆序** 的方式存储的，并且每个节点只能存储 **一位** 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/164760209-938467c9-fac4-46ed-881d-87fb15e3dd56.png)

```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

**示例 2**

```
输入：l1 = [0], l2 = [0]
输出：[0]
```

**示例 3**

```
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
```

**提示：**

- 每个链表中的节点数在范围 [1, 100] 内
- 0 <= Node.val <= 9
- 题目数据保证列表表示的数字不含前导零

## 解答

```typescript
/**
 * 迭代
 * @desc 时间复杂度 O(max(m,n)) 空间复杂度 O(max(m n))
 * @param l1
 * @param l2
 * @returns
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null && l2 === null) {
    return null;
  }

  let head = null;
  let tail = null;

  let sum = 0;
  let curry = 0;

  while (l1 || l2) {
    let n1 = l1 ? l1.val : 0;
    let n2 = l2 ? l2.val : 0;

    sum = n1 + n2 + curry;
    curry = Math.floor(sum / 10);
    sum %= 10;

    if (!head) {
      head = tail = new ListNode(sum);
    } else {
      tail.next = new ListNode(sum);

      tail = tail.next;
    }

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  if (curry) tail.next = new ListNode(1);

  return head;
}
```
