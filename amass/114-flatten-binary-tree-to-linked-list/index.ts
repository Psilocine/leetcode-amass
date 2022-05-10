import { TreeNode } from "~/utils/treeNode";

/**
 * 前序遍历 - 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {void}
 */
export function flatten(root: TreeNode | null): TreeNode | null {
  const list = [];
  preorderTraversal(root, list);
  const size = list.length;
  for (let i = 1; i < size; ++i) {
    let prev = list[i - 1];
    let curr = list[i];
    prev.left = null;
    prev.right = curr;
  }

  return root;
}

function preorderTraversal(root, list) {
  if (root) {
    list.push(root);
    preorderTraversal(root.left, list);
    preorderTraversal(root.right, list);
  }
}

/**
 * 前序遍历 - 迭代
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {void}
 */
export function flatten2(root: TreeNode | null): TreeNode | null {
  const list = [];
  const stack = [];
  let node = root;

  while (node || stack.length) {
    while (node) {
      list.push(node);
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();
    node = node.right;
  }

  const size = list.length;
  for (let i = 1; i < size; i++) {
    const prev = list[i - 1];
    const curr = list[i];
    prev.left = null;
    prev.right = curr;
  }

  return root;
}

/**
 * 前两种方法都是利用前序遍历，过程中需要栈存储节点
 * 对于当前节点，如果其左子节点不为空，则在其左子树中找到最右边的节点，
 * 作为前驱节点，将当前节点的右子节点赋给前驱节点的右子节点，
 * 然后将当前节点的左子节点赋给当前节点的右子节点，并将当前节点的左子节点设为空。
 * 对当前节点处理结束后，继续处理链表中的下一个节点，直到所有节点都处理结束
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param root {TreeNode | null}
 * @returns {void}
 */
export function flatten3(root: TreeNode | null): TreeNode | null {
  let curr = root;
  while (curr !== null) {
    if (curr.left !== null) {
      const next = curr.left;
      let predecessor = next;
      while (predecessor.right !== null) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }

  return root;
}
