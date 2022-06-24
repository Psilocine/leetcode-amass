# 515. 在每个树行中找最大值

> 难度：中等
>
> https://leetcode.cn/problems/find-largest-value-in-each-tree-row/

## 题目

给定一棵二叉树的根节点  root ，请找出该二叉树中每一层的最大值。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/175450387-51f4b5fd-e93e-4e27-937d-46396aea54cd.png)

```
输入: root = [1,3,2,5,3,null,9]
输出: [1,3,9]
```

**示例 2**

```
输入: root = [1,2,3]
输出: [1,3]
```

提示：

- 二叉树的节点个数的范围是 [0,10^4]
- -2^31 <= Node.val <= 2^31 - 1

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * 层序遍历 bfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function largestValues(root: TreeNode | null): number[] {
  // 层序遍历
  const ans: number[] = [];
  if (!root) {
    return ans;
  }

  const stack = [root];

  while (stack.length) {
    const n = stack.length;
    let max: number = -Infinity;

    for (let i = 0; i < n; i++) {
      const node = stack.shift();

      max = Math.max(max, node.val);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }

    ans.push(max);
  }

  return ans;
}
```
