# 1302. 层数最深叶子节点的和

> 难度：中等
>
> https://leetcode.cn/problems/deepest-leaves-sum/

## 题目

给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/185114219-cf6abd8d-3442-42c7-846d-66aeb44e7293.png)

```
输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
输出：15
```

**示例 2**

```
输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
输出：19
```

提示：

- 树中节点数目在范围 [1, 104]  之间。
- 1 <= Node.val <= 100

## 解答

```typescript
/**
 * 深度优先搜索 DFS
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) {
    return null;
  }
  let maxLevel = -1;
  let sum = 0;

  const dfs = (node, level) => {
    if (!node) {
      return;
    }
    if (level > maxLevel) {
      maxLevel = level;
      sum = node.val;
    } else if (level === maxLevel) {
      sum += node.val;
    }

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root, 0);
  return sum;
}

/**
 * 广度优先搜索 BFS
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function deepestLeavesSum2(root: TreeNode | null): number {
  if (!root) {
    return null;
  }

  const queue = [root];
  let sum = 0;
  while (queue.length) {
    sum = 0;
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      sum += node.val;

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return sum;
}
```
