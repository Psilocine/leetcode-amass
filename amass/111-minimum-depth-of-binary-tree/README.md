# 111. 二叉树的最小深度

> 难度：简单
>
> https://leetcode.cn/problems/minimum-depth-of-binary-tree/

## 题目

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/171169527-633685a2-014e-42c2-94f6-a42d3a7c9864.png)

```
输入：root = [3,9,20,null,null,15,7]
输出：2
```

**示例 2**

```
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
```

提示：

- 树中节点数的范围在 [0, 105] 内
- -1000 <= Node.val <= 1000

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * bfs
 * 最小深度，用 bfs 速度更快，因为是层序，而 dfs 需要遍历完所有再比较
 * @desc 时间复杂度 O(n) 空间复杂度 O(h) h 是树的高度
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const queue = [root];

  let depth = 1;
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) {
        return depth;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    depth++;
  }

  return depth;
}

/**
 * dfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function minDepth2(root: TreeNode | null): number {
  if (!root) return 0;
  if (!root.left && !root.right) {
    return 1;
  }

  let ans: number = Infinity;
  if (root.left) {
    ans = Math.min(minDepth2(root.left), ans);
  }
  if (root.right) {
    ans = Math.min(minDepth2(root.right), ans);
  }

  return ans + 1;
}
```
