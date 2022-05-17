# 124. 二叉树中的最大路径和

> 难度：困难
>
> https://leetcode.cn/problems/binary-tree-maximum-path-sum/

## 题目

**路径** 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 **至多出现一次** 。该路径 **至少包含一个** 节点，且不一定经过根节点。

**路径和** 是路径中各节点值的总和。

给你一个二叉树的根节点 `root` ，返回其 **最大路径和** 。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/168758209-0e0c0b3c-736f-4865-b510-2fad077d322f.png)

```
输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/168758220-fbeec650-99ff-49a2-8b2c-7dcee1533d89.png)

```
输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
```

提示：

- 树中节点数目范围是 [1, 3 * 104]
- -1000 <= Node.val <= 1000

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * 难点：维护两个和的值，一个外部和 sum，一个内部返回给父节点的最佳和（即左节点或右节点）
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function maxPathSum(root: TreeNode | null): number {
  let sum = -Infinity;
  const traveser = (root: TreeNode | null) => {
    if (!root) {
      return 0;
    }

    const lp = traveser(root.left);
    const rp = traveser(root.right);

    // 更新外部和
    sum = Math.max(
      sum,
      lp + rp + root.val,
      root.val,
      root.val + lp,
      root.val + rp
    );
    // 返回内部和（给父节点的
    return Math.max(root.val, root.val + lp, root.val + rp);
  };

  traveser(root);
  return sum;
}
```
