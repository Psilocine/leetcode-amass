import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isValidBST(root: TreeNode | null): boolean {
  const dfs = (root, lower, upper) => {
    if (!root) {
      return true;
    }
    if (root.val <= lower || root.val >= upper) {
      return false;
    }

    return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper);
  };

  return dfs(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

/**
 * 中序排列
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isValidBST2(root: TreeNode | null): boolean {
  const stack = [];
  let inorder = Number.MIN_VALUE;

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    // 如果中序遍历得到的节点的值小于前一个 inorder，则不符合
    if (root.val <= inorder) {
      return false;
    }

    inorder = root.val;
    root = root.right;
  }

  return true;
}
