# 141. 环形链表

> 难度：简单
>
> https://leetcode-cn.com/problems/linked-list-cycle/

## 题目

给你一个链表的头节点 `head` ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。**注意：`pos` 不作为参数进行传递** 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 `true` 。 否则，返回 `false`。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/163674339-e865a491-1e5c-4a8a-86e2-3f7ad67d8c56.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例  2**

![image](https://user-images.githubusercontent.com/25545052/163674345-ddd631d1-ae2f-421a-92f8-bbac223f99ab.png)

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3**

![image](https://user-images.githubusercontent.com/25545052/163674351-63544d35-48cf-4a5f-bda8-7afd6d987d1f.png)

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

pos 为 -1 或者链表中的一个 **有效索引**。

**进阶**

你能用 O(1)（即，常量）内存解决此问题吗？

## 解答

```typescript
/**
 * 哈希表
 *
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param head {ListNode | null}
 * @return {boolean}
 */
export function hasCycle(head: ListNode | null): boolean {
  const map = new Map();

  while (head) {
    const crt = map.get(head);
    if (crt) {
      return true;
    } else {
      map.set(head, true);
    }

    head = head.next;
  }

  return false;
}

/**
 * 双指针
 * 快慢指针/龟兔赛跑
 *
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @return {boolean}
 */
export function hasCycle2(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return false;
  }
  let slow: ListNode = head;
  let fast: ListNode = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

/**
 * 标记法
 * 在 head 上新增属性作标记
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param head {ListNode | null}
 * @return {boolean}
 */
export function hasCycle3(
  head: (ListNode & { tag?: boolean }) | null
): boolean {
  while (head) {
    if (head.tag) {
      return true;
    }

    head.tag = true;
    head = head.next;
  }

  return false;
}
```
