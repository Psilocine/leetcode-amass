import { TreeNode } from "~/utils/treeNode";

/**
 * dfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isUnivalTree(root: TreeNode | null): boolean {
  let value = -Infinity;
  let ans = true;
  const traveser = (root: TreeNode | null) => {
    if (value === -Infinity) {
      value = root.val;
    }
    if (!root) {
      return;
    }
    if (!ans) {
      return;
    }
    if (root.val !== value) {
      ans = false;
    }
    traveser(root.left);
    traveser(root.right);
  };

  traveser(root);

  return ans;
}

/**
 * bfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isUnivalTree2(root: TreeNode | null): boolean {
  let value = -Infinity;
  let ans = true;
  const queue = [root];
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (node) {
        if (value === -Infinity) {
          value = node.val;
        }
        if (node.val !== value) {
          return false;
        }
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }
  return ans;
}
