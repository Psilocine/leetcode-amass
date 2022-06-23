import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param val {number}
 * @returns {TreeNode | null}
 */
export function insertIntoBST(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  if (!root) {
    root = new TreeNode(val);
    return root;
  }

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}
