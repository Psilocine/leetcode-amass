# 102. 二叉树的层序遍历

> 难度：中等
>
> https://leetcode.cn/problems/binary-tree-level-order-traversal/

## 题目

给你二叉树的根节点 `root` ，返回其节点值的 **层序遍历** 。 （即逐层地，从左到右访问所有节点）。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/167602062-f704a780-d356-4e5d-b3be-ba22dfea2e48.png)

```
输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
```

**示例 2**

```
输入：root = [1]
输出：[[1]]
```

**示例 3**

```
输入：root = []
输出：[]
```

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * 广度优先搜索 BFS - 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number[][]}
 */
export function levelOrder(root: TreeNode | null): number[][] {
  const ans = [];
  if (!root) {
    return ans;
  }

  const bfs = (tree: TreeNode, depth: number) => {
    if (!ans[depth]) {
      ans[depth] = [];
    }
    ans[depth].push(tree.val);

    if (tree.left) {
      bfs(tree.left, depth + 1);
    }
    if (tree.right) {
      bfs(tree.right, depth + 1);
    }
  };

  bfs(root, 0);

  return ans;
}

/**
 * 广度优先搜索 BFS - 栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number[][]}
 */
export function levelOrder2(root: TreeNode | null): number[][] {
  const ans = [];
  if (!root) {
    return ans;
  }
  const queue = [root];

  while (queue.length) {
    const n = queue.length;
    const crtDepth = [];

    // 必须从前往后，字节点还会加入进来
    for (let i = 0; i < n; ++i) {
      const node = queue.shift();
      crtDepth.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    ans.push(crtDepth);
  }

  return ans;
}
```
