import { TreeNode } from "~/utils/treeNode";

/**
 * 层序遍历 bfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function largestValues(root: TreeNode | null): number[] {
  // 层序遍历
  const ans: number[] = [];
  if (!root) {
    return ans;
  }

  const stack = [root];

  while (stack.length) {
    const n = stack.length;
    let max: number = -Infinity;

    for (let i = 0; i < n; i++) {
      const node = stack.shift();

      max = Math.max(max, node.val);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }

    ans.push(max);
  }

  return ans;
}
