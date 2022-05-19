/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "~/utils/treeNode";

/**
 * dfs 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 */
export function serialize(root: TreeNode | null): string {
  if (root === null) {
    return "null";
  }
  const left: string = serialize(root.left);
  const right: string = serialize(root.right);

  return `${root.val},${left},${right}`;
}

export function deserialize(data: string): TreeNode | null {
  const list = data.split(",");

  const buildTree = (list: string[]) => {
    const rootVal: string = list.shift();
    if (rootVal === "null") {
      return null;
    }
    const root: TreeNode = new TreeNode(Number(rootVal));
    root.left = buildTree(list);
    root.right = buildTree(list);

    return root;
  };

  return buildTree(list);
}

/**
 * bfs 队列
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 */
export function serialize2(root: TreeNode | null): string {
  if (root === null) {
    return "null";
  }

  const ans: string[] = [];
  const queue: TreeNode[] | null[] = [root];
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (node) {
        ans.push(`${node.val}`);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        ans.push("null");
      }
    }
  }
  return ans.toString();
}

export function deserialize2(data: string): TreeNode | null {
  if (data === "null") return null;
  const list = data.split(",");

  const root = new TreeNode(Number(list[0]));
  const queue = [root];
  let cursor = 1;

  while (cursor < list.length) {
    const node = queue.shift();

    const leftVal = list[cursor];
    const rightVal = list[cursor + 1];

    if (leftVal !== "null") {
      const leftNode = new TreeNode(Number(leftVal));

      node.left = leftNode;
      queue.push(leftNode);
    }
    if (rightVal !== "null") {
      const rightNode = new TreeNode(Number(rightVal));

      node.right = rightNode;
      queue.push(rightNode);
    }

    cursor += 2;
  }

  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
