import { TreeNode } from "~/utils/treeNode";

/**
 * 后序 dfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param root {TreeNode | null}
 * @returns {TreeNode | null}
 */
export function pruneTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);

  if (!root.left && !root.right && !root.val) {
    return null;
  }

  return root;
}
