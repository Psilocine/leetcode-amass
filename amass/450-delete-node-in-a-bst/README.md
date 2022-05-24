# 450. 删除二叉搜索树中的节点

> 难度：中等
>
> https://leetcode.cn/problems/delete-node-in-a-bst/

## 题目

给定一个二叉搜索树的根节点 `root` 和一个值 `key`，删除二叉搜索树中的 `key` 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：

1. 首先找到需要删除的节点；
2. 如果找到了，删除它。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/169983047-fac4e777-bbc2-4c00-b778-e9eafa5eec88.png)

```
输入：root = [5,3,6,2,4,null,7], key = 3
输出：[5,4,6,2,null,null,7]
解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
另一个正确答案是 [5,2,6,null,4,null,7]。
```

![image](https://user-images.githubusercontent.com/25545052/169983054-3f802c94-cdad-4c93-a782-f3ea897d929a.png)

**示例 2**

```
输入: root = [5,3,6,2,4,null,7], key = 0
输出: [5,3,6,2,4,null,7]
解释: 二叉树不包含值为 0 的节点
```

**示例 3**

```
输入: root = [], key = 0
输出: []
```

提示:

- 节点数的范围  [0, 104].
- -105 <= Node.val <= 105
- 节点值唯一
- root  是合法的二叉搜索树
- -105 <= key <= 105

进阶： 要求算法时间复杂度为  O(h)，h 为树的高度。

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * 递归 + 二分
 * @desc 时间复杂度 O(logn) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param key {number}
 * @returns {TreeNode | null}
 */
export function deleteNode(
  root: TreeNode | null,
  key: number
): TreeNode | null {
  if (!root) {
    return null;
  }
  if (root.val === key) {
    // 找到
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    // 寻找右子树的最小节点
    const minNode: TreeNode = getMin(root.right);

    root.right = deleteNode(root.right, minNode.val);

    minNode.left = root.left;
    minNode.right = root.right;

    root = minNode;
  } else if (root.val > key) {
    // 在左子树找
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    // 在右子树找
    root.right = deleteNode(root.right, key);
  }

  return root;
}

function getMin(root: TreeNode) {
  while (root.left) {
    root = root.left;
  }

  return root;
}

/**
 *
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param root {TreeNode | null}
 * @param key {number}
 * @returns {TreeNode | null}
 */
export function deleteNode2(
  root: TreeNode | null,
  key: number
): TreeNode | null {}
```
