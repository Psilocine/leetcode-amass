# 1161. 最大层内元素和

> 难度：中等
>
> https://leetcode.cn/problems/maximum-level-sum-of-a-binary-tree/

## 题目

给你一个二叉树的根节点  root。设根节点位于二叉树的第 1 层，而根节点的子节点位于第 2 层，依此类推。

请返回层内元素之和 最大 的那几层（可能只有一层）的层号，并返回其中   最小 的那个。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/182034630-f4dea6f4-f43a-419b-8508-93daa4f0fbfe.png)

```
输入：root = [1,7,0,7,-8,null,null]
输出：2
解释：
第 1 层各元素之和为 1，
第 2 层各元素之和为 7 + 0 = 7，
第 3 层各元素之和为 7 + -8 = -1，
所以我们返回第 2 层的层号，它的层内元素之和最大。
```

**示例 2**

```
输入：root = [989,null,10250,98693,-89388,null,null,null,-32127]
输出：2
```

提示：

- 树中的节点数在  [1, 104]范围内
- -10^5 <= Node.val <= 10^5

## 解答

```typescript
/**
 * bfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function maxLevelSum(root: TreeNode | null): number {
  if (!root) {
    return null;
  }

  const stack = [root];
  let max: number = -Infinity;
  let level: number = 0;
  let ans: number = 0;

  while (stack.length) {
    const n = stack.length;
    level++;
    let sum: number;
    for (let i = 0; i < n; i++) {
      const node = stack.shift();
      if (!sum) sum = 0;
      sum += node.val;
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    if (sum && sum > max) {
      max = sum;
      ans = level;
    }
  }

  return ans;
}
```
