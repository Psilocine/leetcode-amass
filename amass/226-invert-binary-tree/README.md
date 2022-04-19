# 226. 翻转二叉树

> 难度：简单
>
> https://leetcode-cn.com/problems/invert-binary-tree/

## 题目

给你一颗二叉树的根节点 `root`，反转这颗二叉树，并返回其根节点。

示例 1：

![image](https://user-images.githubusercontent.com/25545052/163947387-27700ade-b690-49d2-815d-77152201f506.png)

```
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

示例 2：

![image](https://user-images.githubusercontent.com/25545052/163947396-669c2826-3ce0-4052-8d03-eb53e72c5808.png)

```
输入：root = [2,1,3]
输出：[2,3,1]
```

示例 3：

```
输入：root = []
输出：[]
```

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * DFS 前序
 * @desc 时间复杂度 O(n) 空间复杂度 O(h) h 为二叉树的高度
 * @param root {TreeNode | null}
 * @return {TreeNode | null}
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;

  // 先反转当前 root 的左右节点
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // 再递归
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

/**
 * 递归
 * DFS 后序
 * @desc 时间复杂度 O(n) 空间复杂度 O(h) h 为二叉树的高度
 * @param root {TreeNode | null}
 * @return {TreeNode | null}
 */
export function invertTree2(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;

  // 先递归
  invertTree(root.left);
  invertTree(root.right);

  // 再反转当前 root 的左右节点
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
}

/**
 * 递归
 * BFS
 * @desc 时间复杂度 O(n) 空间复杂度 O(h) h 为二叉树的高度
 * @param root {TreeNode | null}
 * @return {TreeNode | null}
 */
export function invertTree3(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;

  const stack: TreeNode[] = [root];

  while (stack.length) {
    const n = stack.length;
    for (let i = 0; i < n; i++) {
      const cur = stack.pop();

      if (cur.left) {
        stack.push(cur.left);
      }
      if (cur.right) {
        stack.push(cur.right);
      }

      const temp = cur.left;
      cur.left = cur.right;
      cur.right = temp;
    }
  }

  return root;
}
```
