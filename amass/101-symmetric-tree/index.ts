import { TreeNode } from "~/utils/treeNode"

/**
 * 递归
 * 
 * @desc
 * @param root {TreeNode | null}
 * @return {boolean}
 */
export function isSymmetric(root: TreeNode | null): boolean {

  return mirror(root, root)
};

/**
 * 镜像
 */
function mirror(r1: TreeNode | null, r2: TreeNode | null): boolean {
  if (!r1 && !r2) return true
  if (!r1 || !r2) return false;

  while(r1 && r2) {
    if (r1.val === r2.val) {
      return mirror(r1.left, r2.right) && mirror(r1.right, r2.left)
    }
    return false;
  }
}