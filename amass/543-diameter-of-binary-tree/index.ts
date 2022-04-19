import { TreeNode } from "~/utils/treeNode";

/**
 * 递归 DFS
 * @desc 时间复杂度 O(n) 空间复杂度 O(h)
 * @param root { TreeNode | null }
 * @returns { number }
 */
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;
  const depth = (root) => {
    if (root === null) {
      return 0;
    }
    const l = depth(root.left);
    const r = depth(root.right);
    
    max = Math.max(max, l + r)

    return Math.max(l, r) + 1
  }

  depth(root)
  return max;
}
