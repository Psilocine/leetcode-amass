# 144. 二叉树的前序遍历

> 难度：简单
>
> https://leetcode.cn/problems/binary-tree-preorder-traversal/

## 题目

给你二叉树的根节点 root ，返回它节点值的   前序   遍历。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/167753618-b39c42e3-d0f7-4c14-8f7f-99367dbf4293.png)

```
输入：root = [1,null,2,3]
输出：[1,2,3]
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

**示例 4**

![image](https://user-images.githubusercontent.com/25545052/167753612-2fa59287-24bb-4b4e-b206-34546eb7d2d7.png)

```
输入：root = [1,2]
输出：[1,2]
```

**示例 5**

![image](https://user-images.githubusercontent.com/25545052/167753607-404f6888-3e55-4b38-a5e3-5a5fa7615223.png)

```
输入：root = [1,null,2]
输出：[1,2]
```

提示：

- 树中节点数目在范围 [0, 100] 内
- -100 <= Node.val <= 100

进阶：递归算法很简单，你可以通过迭代算法完成吗？

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number[]}
 */
export function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = [];
  preorder(root, ans);
  return ans;
}

function preorder(root: TreeNode | null, ans: number[]) {
  if (root) {
    ans.push(root.val);
    preorder(root.left, ans);
    preorder(root.right, ans);
  }
}

/**
 * 栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number[]}
 */
export function preorderTraversal2(root: TreeNode | null): number[] {
  const ans: number[] = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      ans.push(root.val);
      root = root.left;
    }

    root = stack.pop();
    root = root.right;
  }

  return ans;
}
```
