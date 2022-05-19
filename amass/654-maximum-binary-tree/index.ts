import { TreeNode } from "~/utils/treeNode";

/**
 * dfs 递归 分解子问题
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {TreeNode | null}
 */
export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }
  const root: number = Math.max(...nums);
  const rootIdx = nums.indexOf(root);

  const node = new TreeNode(root);

  node.left = constructMaximumBinaryTree(nums.slice(0, rootIdx));
  node.right = constructMaximumBinaryTree(nums.slice(rootIdx + 1));

  return node;
}
