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
 * 动态规划
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function rob(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  // 后序
  const traverse = (root) => {
    if (!root) {
      return [0, 0];
    }

    const l = traverse(root.left);
    const r = traverse(root.right);

    const ans = new Array(2).fill(0);
    // 选择当前节点
    ans[0] = root.val + l[1] + r[1];
    // 不选节点
    // ans[1] = Math.max(l[0] + r[0], l[1] + r[1], l[1] + r[0], l[0] + r[1]);
    ans[1] = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
    return ans;
  };

  const ans = traverse(root);
  return Math.max(...ans);
}
