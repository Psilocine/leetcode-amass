# 236. 二叉树的最近公共祖先

> 难度：中等
>
> https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/

## 题目

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

[百度百科](https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin)中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（**一个节点也可以是它自己的祖先**）。”

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/169033314-bad2dea8-6fb7-4de8-b744-473c1466f19b.png)

```
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/169033314-bad2dea8-6fb7-4de8-b744-473c1466f19b.png)

```
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
```

**示例 3**

```
输入：root = [1,2], p = 1, q = 2
输出：1
```

提示：

- 树中节点数目在范围 [2, 105] 内。
- -109 <= Node.val <= 109
- 所有 Node.val 互不相同 。
- p != q
- p 和 q 均存在于给定的二叉树中。

## 解答

```typescript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "~/utils/treeNode";

/**
 * dfs 递归 - 后序
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param p {TreeNode | null}
 * @param q {TreeNode | null}
 * @returns {TreeNode | null}
 */
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let ans: TreeNode | null = null;

  const traverse = (root) => {
    if (!root) {
      return false;
    }
    if (ans) {
      return;
    }

    const leftVal = traverse(root.left);
    const rightVal = traverse(root.right);

    if (
      (leftVal && rightVal) ||
      ((leftVal || rightVal) && (root.val === p.val || root.val === q.val))
    ) {
      ans = root;
      return root;
    }

    if (root.val === p.val || root.val === q.val || leftVal || rightVal) {
      return true;
    }
    return false;
  };

  traverse(root);
  return ans;
}

/**
 * dfs 递归 - 后序
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param p {TreeNode | null}
 * @param q {TreeNode | null}
 * @returns {TreeNode | null}
 */
export function lowestCommonAncestor2(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  if (!root || root.val === p.val || root.val === q.val) {
    return root;
  }
  const left = lowestCommonAncestor2(root.left, p, q);
  const right = lowestCommonAncestor2(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left || right;
}
```
