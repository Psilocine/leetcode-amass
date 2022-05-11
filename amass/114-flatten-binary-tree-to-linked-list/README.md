# 114. 二叉树展开为链表

> 难度：中等
>
> https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/

## 题目

给你二叉树的根结点 `root` ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 `TreeNode` ，其中 `right` 子指针指向链表中下一个结点，而左子指针始终为 `null` 。
展开后的单链表应该与二叉树 `先序遍历` 顺序相同。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/167643340-751b27b6-d7c8-4d74-b24a-ffd41b2c6077.png)

```
输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
```

**示例 2**

```
输入：root = []
输出：[]
```

**示例 3**

```
输入：root = [0]
输出：[0]
```

**提示：**

- 树中结点数在范围 [0, 2000] 内
- -100 <= Node.val <= 100

进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * 前序遍历 - 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {void}
 */
export function flatten(root: TreeNode | null): TreeNode | null {
  const list = [];
  preorderTraversal(root, list);
  const size = list.length;
  for (let i = 1; i < size; ++i) {
    let prev = list[i - 1];
    let curr = list[i];
    prev.left = null;
    prev.right = curr;
  }

  return root;
}

function preorderTraversal(root, list) {
  if (root) {
    list.push(root);
    preorderTraversal(root.left, list);
    preorderTraversal(root.right, list);
  }
}

/**
 * 前序遍历 - 迭代
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {void}
 */
export function flatten2(root: TreeNode | null): TreeNode | null {
  const list = [];
  const stack = [];
  let node = root;

  while (node || stack.length) {
    while (node) {
      list.push(node);
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    node = node.right;
  }

  const size = list.length;
  for (let i = 1; i < size; i++) {
    const prev = list[i - 1];
    const curr = list[i];
    prev.left = null;
    prev.right = curr;
  }

  return root;
}

/**
 * 前两种方法都是利用前序遍历，过程中需要栈存储节点
 * 对于当前节点，如果其左子节点不为空，则在其左子树中找到最右边的节点，
 * 作为前驱节点，将当前节点的右子节点赋给前驱节点的右子节点，
 * 然后将当前节点的左子节点赋给当前节点的右子节点，并将当前节点的左子节点设为空。
 * 对当前节点处理结束后，继续处理链表中的下一个节点，直到所有节点都处理结束
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param root {TreeNode | null}
 * @returns {void}
 */
export function flatten3(root: TreeNode | null): TreeNode | null {
  let curr = root;
  while (curr !== null) {
    if (curr.left !== null) {
      const next = curr.left;
      let predecessor = next;
      while (predecessor.right !== null) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }

  return root;
}
```
