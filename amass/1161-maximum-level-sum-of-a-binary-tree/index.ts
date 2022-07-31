import { TreeNode } from "~/utils/treeNode";

/**
 * bfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function maxLevelSum(root: TreeNode | null): number {
  if (!root) {
    return null;
  }

  const stack = [root];
  let max: number = -Infinity;
  let level: number = 0;
  let ans: number = 0;

  while (stack.length) {
    const n = stack.length;
    level++;
    let sum: number;
    for (let i = 0; i < n; i++) {
      const node = stack.shift();
      if (!sum) sum = 0;
      sum += node.val;
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    if (sum && sum > max) {
      max = sum;
      ans = level;
    }
  }

  return ans;
}
