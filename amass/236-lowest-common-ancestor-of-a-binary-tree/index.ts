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
 * dfs 递归 - 后序
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param p {TreeNode | null}
 * @param q {TreeNode | null}
 * @returns {TreeNode | null}
 */
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let ans: TreeNode | null = null;

  const traverse = (root) => {
    if (!root) {
      return false;
    }
    if (ans) {
      return;
    }

    const leftVal = traverse(root.left);
    const rightVal = traverse(root.right);

    if (
      (leftVal && rightVal) ||
      ((leftVal || rightVal) && (root.val === p.val || root.val === q.val))
    ) {
      ans = root;
      return root;
    }

    if (root.val === p.val || root.val === q.val || leftVal || rightVal) {
      return true;
    }
    return false;
  };

  traverse(root);
  return ans;
}

/**
 * dfs 递归 - 后序
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param p {TreeNode | null}
 * @param q {TreeNode | null}
 * @returns {TreeNode | null}
 */
export function lowestCommonAncestor2(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  if (!root || root.val === p.val || root.val === q.val) {
    return root;
  }
  const left = lowestCommonAncestor2(root.left, p, q);
  const right = lowestCommonAncestor2(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left || right;
}
