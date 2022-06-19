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
 * dfs + 遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number[]}
 */
export function findFrequentTreeSum(root: TreeNode | null): number[] {
  const map: Map<number, number> = new Map();

  const ans: number[] = [];
  let max = -Infinity;
  const postorder = (root) => {
    if (!root) {
      return 0;
    }

    const l = postorder(root.left);
    const r = postorder(root.right);

    const sum = l + r + root.val;

    map.set(sum, (map.get(sum) || 0) + 1);
    max = Math.max(max, map.get(sum));

    return sum;
  };

  postorder(root);

  for (let [key, value] of map) {
    if (value === max) {
      ans.push(key);
    }
  }

  return ans;
}
