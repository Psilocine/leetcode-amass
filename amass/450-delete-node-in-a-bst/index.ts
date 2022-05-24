import { TreeNode } from "~/utils/treeNode";

/**
 * 递归 + 二分
 * @desc 时间复杂度 O(logn) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param key {number}
 * @returns {TreeNode | null}
 */
export function deleteNode(
  root: TreeNode | null,
  key: number
): TreeNode | null {
  if (!root) {
    return null;
  }
  if (root.val === key) {
    // 找到
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    // 寻找右子树的最小节点
    const minNode: TreeNode = getMin(root.right);

    root.right = deleteNode(root.right, minNode.val);

    minNode.left = root.left;
    minNode.right = root.right;

    root = minNode;
  } else if (root.val > key) {
    // 在左子树找
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    // 在右子树找
    root.right = deleteNode(root.right, key);
  }

  return root;
}

function getMin(root: TreeNode) {
  while (root.left) {
    root = root.left;
  }

  return root;
}

/**
 *
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param root {TreeNode | null}
 * @param key {number}
 * @returns {TreeNode | null}
 */
export function deleteNode2(
  root: TreeNode | null,
  key: number
): TreeNode | null {}
