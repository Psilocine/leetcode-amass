import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * DFS - 要求返回新二叉树
 * @desc 时间复杂度 O(min(m, n)) 空间复杂度 O(min(m, n))
 * @param root1 {TreeNode | null}
 * @param root2 {TreeNode | null}
 * @return {TreeNode | null}
 */
export function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null) {
    return root2;
  }
  if (root2 === null) {
    return root1;
  }

  return new TreeNode(
    root1.val + root2.val,
    mergeTrees(root1.left, root2.left),
    mergeTrees(root1.right, root2.right)
  );
}

/**
 * 递归
 * BFS
 * @desc 时间复杂度 O(min(m, n)) 空间复杂度 O(min(m, n))
 * @param root1 {TreeNode | null}
 * @param root2 {TreeNode | null}
 * @return {TreeNode | null}
 */
export function mergeTrees2(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null) {
    return root2;
  }
  if (root2 === null) {
    return root1;
  }

  const merged = new TreeNode(root1.val + root2.val);
  const queue = [merged];
  const queue1 = [root1];
  const queue2 = [root2];

  while (queue1.length || queue2.length) {
    const node = queue.shift();
    const node1 = queue1.shift();
    const node2 = queue2.shift();

    let left1 = node1.left;
    let left2 = node2.left;

    let right1 = node1.right;
    let right2 = node2.right;

    if (left1 || left2) {
      if (left1 && left2) {
        let left = new TreeNode(left1.val + left2.val);
        node.left = left;

        queue.push(left);
        queue1.push(left1);
        queue2.push(left2);
      } else node.left = left1 || left2;
    }
    if (right1 || right2) {
      if (right1 && right2) {
        let right = new TreeNode(right1.val + right2.val);
        node.right = right;

        queue.push(right);
        queue1.push(right1);
        queue2.push(right2);
      } else node.right = right1 || right2;
    }
  }

  return merged;
}
