# 104. 二叉树的最大深度

> 难度：简单
>
> https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

## 题目

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

**示例：**
```
给定二叉树 [3,9,20,null,null,15,7]，
    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
```

## 解答
```typescript
/**
 * 遍历
 * DFS，深度优先搜索
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  } else {
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }
}

/**
 * 迭代
 * BFS 每经过一层 depth++
 * while 控制深度遍历 for 控制每一层遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function maxDepth2(root: TreeNode | null): number {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;

  while(queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // 队头出列
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    depth++;
  }

  return depth;
}
```