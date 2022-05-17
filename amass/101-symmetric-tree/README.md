# 101. 对称二叉树

> 难度：简单
>
> https://leetcode-cn.com/problems/symmetric-tree/

## 题目

给你一个二叉树的根节点 `root` ， 检查它是否轴对称。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/163556656-6decb6aa-9e6f-4b1f-a4a2-8f08a933698f.png)

```
输入：root = [1,2,2,3,4,4,3]
输出：true
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/163556666-718c7a35-e60e-4a4e-aec4-f4223876751a.png)

```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

**进阶**

你可以运用递归和迭代两种方法解决这个问题吗？

## 解答

```typesciprt
import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  const traveser = (left, right) => {
    if ((left && !right) || (!left && right)) {
      return false;
    } else if (!left && !right) {
      return true;
    } else if (left.val !== right.val) {
      return false;
    }

    const outsides = traveser(left.left, right.right); // 外侧对比
    const insides = traveser(left.right, right.left); // 内侧对比

    return outsides && insides;
  };

  return traveser(root.left, root.right);
}

/**
 * 迭代 - 队列
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isSymmetric2(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  const queue: TreeNode[] = [];
  queue.push(root.left);
  queue.push(root.right);

  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if (!left && !right) {
      continue;
    }

    if (!left || !right || left.val !== right.val) {
      return false;
    }
    // 外侧对比
    queue.push(left.left);
    queue.push(right.right);

    // 内侧对比
    queue.push(left.right);
    queue.push(right.left);
  }

  return true;
}

/**
 * 迭代 - 栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isSymmetric3(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  const stack: TreeNode[] = [];
  stack.push(root.right);
  stack.push(root.left);

  while (stack.length) {
    const left = stack.pop();
    const right = stack.pop();

    if (!left && !right) {
      continue;
    }
    if (!left || !right || left.val !== right.val) {
      return false;
    }

    // 外侧
    stack.push(right.right);
    stack.push(left.left);

    // 内侧
    stack.push(right.left);
    stack.push(left.right);
  }
  return true;
}

```
