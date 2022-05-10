import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param preorder {number[]}
 * @param inorder {number[]}
 */
export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (preorder.length === 0) return null;

  const root = new TreeNode(preorder[0]);

  if (inorder.length === 1) return root;

  const rootIdx = inorder.indexOf(preorder[0]);

  root.left = buildTree(
    preorder.slice(1, rootIdx + 1),
    inorder.slice(0, rootIdx)
  );
  root.right = buildTree(
    preorder.slice(1 + rootIdx),
    inorder.slice(1 + rootIdx)
  );

  return root;
}
