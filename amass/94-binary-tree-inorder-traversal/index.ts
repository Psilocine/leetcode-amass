import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * @desc 时间复杂度 O(n)  空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @return {number[]}
 */
export function inorderTraversal(root: TreeNode | null): number[] {
  const res = [];
  const deep = (root) => {
    if (!root) {
      return;
    }
    deep(root.left);
    res.push(root.val);
    deep(root.right);
  };

  deep(root);
  return res;
}

/**
 * 迭代
 * @desc 时间复杂度 O(n)  空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @return {number[]}
 */
export function inorderTraversal2(root: TreeNode | null): number[] {
  const res = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }

  return res;
}
