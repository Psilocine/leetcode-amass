# 94. 二叉树的中序遍历

> 难度：简单
>
> https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

## 题目

给定一个二叉树的根节点 `root` ，返回 它的 **中序** 遍历 。

**示例 1**

![eg](https://user-images.githubusercontent.com/25545052/163350150-371df398-38c7-4f9a-b41c-fb1a1a696d67.png)
```
输入：root = [1,null,2,3]
输出：[1,3,2]
```

**示例 2**

```
输入：root = []
输出：[]
```

**示例 3**
```
输入：root = [1]
输出：[1]
```

**进阶**

递归算法很简单，你可以通过迭代算法完成吗？

## 解答
```typescript
/**
 * 递归
 * @desc 时间复杂度 O(n)  空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @return {number[]}
 */
export function inorderTraversal(root: TreeNode | null): number[] {
  const res = [];
  const deep = (root) => {
    if (!root) {
      return;
    }
    deep(root.left)
    res.push(root.val)
    deep(root.right)
  }

  deep(root);
  return res;
}


/**
 * 迭代
 * 和递归等价，区别在于递归隐式维护了一个栈，迭代需要我们手动模拟维护
 * @desc 时间复杂度 O(n)  空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @return {number[]}
 */
export function inorderTraversal2(root: TreeNode | null): number[] {
  const res = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }

  return res;
}
```