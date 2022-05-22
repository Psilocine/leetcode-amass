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
 * 暴力破解
 * @desc 时间复杂度 O(n ^ 2) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param targetSum {number}
 * @returns {number}
 */
export function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }
  let ans: number = rootSum(root, targetSum);
  ans += pathSum(root.left, targetSum);
  ans += pathSum(root.right, targetSum);

  return ans;
}

function rootSum(root: TreeNode | null, targetSum: number): number {
  let ans = 0;
  if (!root) {
    return ans;
  }
  if (root.val === targetSum) {
    ans++;
  }

  ans += rootSum(root.left, targetSum - root.val);
  ans += rootSum(root.right, targetSum - root.val);

  return ans;
}

/**
 * 前缀和 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param targetSum {number}
 * @returns {number}
 */
export function pathSum2(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }
  const prefix = new Map();
  prefix.set(0, 1);

  const dfs = (root, curr, targetSum) => {
    if (!root) {
      return 0;
    }
    let ret = 0;
    curr += root.val;

    ret = prefix.get(curr - targetSum) || 0;
    prefix.set(curr, (prefix.get(curr) || 0) + 1);
    ret += dfs(root.left, curr, targetSum);
    ret += dfs(root.right, curr, targetSum);
    prefix.set(curr, (prefix.get(curr) || 0) - 1);

    return ret;
  };

  const ans: number = dfs(root, 0, targetSum);

  return ans;
}
