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
 * dfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param p {TreeNode | null}
 * @param q {TreeNode | null}
 * @returns boolean
 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

/**
 * bfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param p {TreeNode | null}
 * @param q {TreeNode | null}
 * @returns boolean
 */
export function isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue = [];
  
}
