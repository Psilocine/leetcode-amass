import { TreeNode } from "~/utils/treeNode";

/**
 * 递归 - dfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param val {number}
 * @returns {TreeNode | null}
 */
export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  } else if (root.val > val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param root {TreeNode | null}
 * @param val {number}
 * @returns {TreeNode | null}
 */
export function searchBST2(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  while (root) {
    if (root.val === val) {
      return root;
    }
    root = root.val > val ? root.left : root.right;
  }

  return null;
}
