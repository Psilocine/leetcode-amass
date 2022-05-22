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
 * 反序中序遍历（右根左） dfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {TreeNode | null}
 */
export function convertBST(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  let sum = 0;
  const traveser = (root) => {
    if (!root) {
      return null;
    }

    traveser(root.right);
    sum += root.val;
    root.val = sum;
    traveser(root.left);
  };

  traveser(root);

  return root;
}

/**
 * 反向 Morris 遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param root {TreeNode | null}
 * @returns {TreeNode | null}
 */
export function convertBST2(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  let sum: number = 0;
  let cur: TreeNode = root;
  let mostLeft: TreeNode | null = null;

  while (cur) {
    mostLeft = cur.right;
    // 当前节点有右树
    if (mostLeft) {
      // 找到最左节点
      while (mostLeft.left !== null && mostLeft.left !== cur) {
        mostLeft = mostLeft.left;
      }
      // 最左节点 mostLeft 的左节点为 null
      if (mostLeft.left === null) {
        mostLeft.left = cur;
        cur = cur.right;
        continue;
      } else {
        mostLeft.left = null;
      }
    }
    sum += cur.val;
    cur.val = sum;
    cur = cur.left;
  }

  return root;
}
