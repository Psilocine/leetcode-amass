import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * DFS 前序
 * @desc 时间复杂度 O(n) 空间复杂度 O(h) h 为二叉树的高度
 * @param root {TreeNode | null}
 * @return {TreeNode | null}
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;

  // 先反转当前 root 的左右节点
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // 再递归
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

/**
 * 递归
 * DFS 后序
 * @desc 时间复杂度 O(n) 空间复杂度 O(h) h 为二叉树的高度
 * @param root {TreeNode | null}
 * @return {TreeNode | null}
 */
export function invertTree2(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;

  // 先递归
  invertTree(root.left);
  invertTree(root.right);

  // 再反转当前 root 的左右节点
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
}

/**
 * 递归
 * BFS
 * @desc 时间复杂度 O(n) 空间复杂度 O(h) h 为二叉树的高度
 * @param root {TreeNode | null}
 * @return {TreeNode | null}
 */
export function invertTree3(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;

  const stack: TreeNode[] = [root];

  while (stack.length) {
    const n = stack.length;
    for (let i = 0; i < n; i++) {
      const cur = stack.pop();

      if (cur.left) {
        stack.push(cur.left);
      }
      if (cur.right) {
        stack.push(cur.right);
      }

      const temp = cur.left;
      cur.left = cur.right;
      cur.right = temp;
    }
  }

  return root;
}
