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
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function sumRootToLeaf(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let ans: number = 0;
  const dfs = (root: TreeNode | null, path: string) => {
    path = path + root.val;
    if (!root.left && !root.right) {
      ans += parseInt(path, 2);
      return;
    }
    root.left && dfs(root.left, path);
    root.right && dfs(root.right, path);
  };

  dfs(root, "");

  return ans;
}
