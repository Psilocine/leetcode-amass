import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number[]}
 */
export function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = [];
  preorder(root, ans);
  return ans;
}

function preorder(root: TreeNode | null, ans: number[]) {
  if (root) {
    ans.push(root.val);
    preorder(root.left, ans);
    preorder(root.right, ans);
  }
}

/**
 * 栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number[]}
 */
export function preorderTraversal2(root: TreeNode | null): number[] {
  const ans: number[] = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      ans.push(root.val);
      root = root.left;
    }

    root = stack.pop();
    root = root.right;
  }

  return ans;
}
