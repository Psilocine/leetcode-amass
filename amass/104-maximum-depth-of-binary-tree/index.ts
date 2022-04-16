import { TreeNode } from "~/utils/treeNode";

/**
 * 遍历
 * DFS，深度优先搜索
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  } else {
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }
}

/**
 * 迭代
 * BFS 每经过一层 depth++
 * while 控制深度遍历 for 控制每一层遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function maxDepth2(root: TreeNode | null): number {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;

  while(queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // 队头出列
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    depth++;
  }

  return depth;
}
