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
