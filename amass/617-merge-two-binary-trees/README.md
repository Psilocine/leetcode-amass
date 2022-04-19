# 617. 合并二叉树

> 难度：简单
>
> https://leetcode-cn.com/problems/merge-two-binary-trees/

## 题目

给你两颗二叉树：`root1` 和 `root2`

想象一下，当你将其中一颗覆盖到另一颗之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将两颗树合并成一颗新二叉树。合并的规则是：如果两个节点重叠，那么将两个节点的值相加作为合并后节点的新值；否则，**不为** null 的节点将直接作为新二叉树的节点。

返回合并后的二叉树。

**注意：**

合并过程必须从两个树的根节点开始。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/163980749-c990d8cf-37b2-4e9a-ab27-8639a6389f71.png)

```
输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
输出：[3,4,5,5,4,null,7]
```

**示例 2**

```
输入：root1 = [1], root2 = [1,2]
输出：[2,2]
```

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * DFS - 要求返回新二叉树
 * @desc 时间复杂度 O(min(m, n)) 空间复杂度 O(min(m, n))
 * @param root1 {TreeNode | null}
 * @param root2 {TreeNode | null}
 * @return {TreeNode | null}
 */
export function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null) {
    return root2;
  }
  if (root2 === null) {
    return root1;
  }

  return new TreeNode(
    root1.val + root2.val,
    mergeTrees(root1.left, root2.left),
    mergeTrees(root1.right, root2.right)
  );
}

/**
 * 递归
 * BFS
 * @desc 时间复杂度 O(min(m, n)) 空间复杂度 O(min(m, n))
 * @param root1 {TreeNode | null}
 * @param root2 {TreeNode | null}
 * @return {TreeNode | null}
 */
export function mergeTrees2(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null) {
    return root2;
  }
  if (root2 === null) {
    return root1;
  }

  const merged = new TreeNode(root1.val + root2.val);
  const queue = [merged];
  const queue1 = [root1];
  const queue2 = [root2];

  while (queue1.length || queue2.length) {
    const node = queue.shift();
    const node1 = queue1.shift();
    const node2 = queue2.shift();

    let left1 = node1.left;
    let left2 = node2.left;

    let right1 = node1.right;
    let right2 = node2.right;

    if (left1 || left2) {
      if (left1 && left2) {
        let left = new TreeNode(left1.val + left2.val);
        node.left = left;

        queue.push(left);
        queue1.push(left1);
        queue2.push(left2);
      } else node.left = left1 || left2;
    }
    if (right1 || right2) {
      if (right1 && right2) {
        let right = new TreeNode(right1.val + right2.val);
        node.right = right;

        queue.push(right);
        queue1.push(right1);
        queue2.push(right2);
      } else node.right = right1 || right2;
    }
  }

  return merged;
}
```
