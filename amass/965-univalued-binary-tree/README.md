# 965. 单值二叉树

> 难度：简单
>
> https://leetcode.cn/problems/univalued-binary-tree/

## 题目

如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。

只有给定的树是单值二叉树时，才返回 `true`；否则返回 `false`。

**示例 1**

```
输入：[1,1,1,1,1,null,1]
输出：true
```

**示例 2**

```
输入：[2,2,2,5,2]
输出：false
```

提示：

- 给定树的节点数范围是  [1, 100]。
- 每个节点的值都是整数，范围为  [0, 99] 。

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * dfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isUnivalTree(root: TreeNode | null): boolean {
  let value = -Infinity;
  let ans = true;
  const traveser = (root: TreeNode | null) => {
    if (value === -Infinity) {
      value = root.val;
    }
    if (!root) {
      return;
    }
    if (!ans) {
      return;
    }
    if (root.val !== value) {
      ans = false;
    }
    traveser(root.left);
    traveser(root.right);
  };

  traveser(root);

  return ans;
}

/**
 * bfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isUnivalTree2(root: TreeNode | null): boolean {
  let value = -Infinity;
  let ans = true;
  const queue = [root];
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (node) {
        if (value === -Infinity) {
          value = node.val;
        }
        if (node.val !== value) {
          return false;
        }
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }
  return ans;
}
```
