# 105. 从前序与中序遍历序列构造二叉树

> 难度：中等
>
> https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

## 题目

给定两个整数数组 `preorder` 和 `inorder` ，其中  `preorder` 是二叉树的**先序遍历**， `inorder` 是同一棵树的**中序遍历**，请构造二叉树并返回其根节点。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/167632161-1d2e1025-f396-451a-b204-fcf8a8cba966.png)

```
输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
```

**示例 2**

```
输入: preorder = [-1], inorder = [-1]
输出: [-1]
```

**提示:**

- 1 <= preorder.length <= 3000
- inorder.length == preorder.length
- -3000 <= preorder[i], inorder[i] <= 3000
- preorder  和  inorder  均 无重复 元素
- inorder  均出现在  preorder
- preorder  保证 为二叉树的前序遍历序列
- inorder  保证 为二叉树的中序遍历序列

## 解答

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param preorder {number[]}
 * @param inorder {number[]}
 */
export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (preorder.length === 0) return null;

  const root = new TreeNode(preorder[0]);

  if (inorder.length === 1) return root;

  const rootIdx = inorder.indexOf(preorder[0]);

  root.left = buildTree(
    preorder.slice(1, rootIdx + 1),
    inorder.slice(0, rootIdx)
  );
  root.right = buildTree(
    preorder.slice(1 + rootIdx),
    inorder.slice(1 + rootIdx)
  );

  return root;
}
```
