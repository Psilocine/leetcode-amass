import { TreeNode } from "~/utils/treeNode";

/**
 * bfs
 * 最小深度，用 bfs 速度更快，因为是层序，而 dfs 需要遍历完所有再比较
 * @desc 时间复杂度 O(n) 空间复杂度 O(h) h 是树的高度
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const queue = [root];

  let depth = 1;
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) {
        return depth;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    depth++;
  }

  return depth;
}

/**
 * dfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function minDepth2(root: TreeNode | null): number {
  if (!root) return 0;
  if (!root.left && !root.right) {
    return 1;
  }

  let ans: number = Infinity;
  if (root.left) {
    ans = Math.min(minDepth2(root.left), ans);
  }
  if (root.right) {
    ans = Math.min(minDepth2(root.right), ans);
  }

  return ans + 1;
}
