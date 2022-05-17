import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  const traveser = (left, right) => {
    if ((left && !right) || (!left && right)) {
      return false;
    } else if (!left && !right) {
      return true;
    } else if (left.val !== right.val) {
      return false;
    }

    const outsides = traveser(left.left, right.right); // 外侧对比
    const insides = traveser(left.right, right.left); // 内侧对比

    return outsides && insides;
  };

  return traveser(root.left, root.right);
}

/**
 * 迭代 - 队列
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isSymmetric2(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  const queue: TreeNode[] = [];
  queue.push(root.left);
  queue.push(root.right);

  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if (!left && !right) {
      continue;
    }

    if (!left || !right || left.val !== right.val) {
      return false;
    }
    // 外侧对比
    queue.push(left.left);
    queue.push(right.right);

    // 内侧对比
    queue.push(left.right);
    queue.push(right.left);
  }

  return true;
}

/**
 * 迭代 - 栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isSymmetric3(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  const stack: TreeNode[] = [];
  stack.push(root.right);
  stack.push(root.left);

  while (stack.length) {
    const left = stack.pop();
    const right = stack.pop();

    if (!left && !right) {
      continue;
    }
    if (!left || !right || left.val !== right.val) {
      return false;
    }

    // 外侧
    stack.push(right.right);
    stack.push(left.left);

    // 内侧
    stack.push(right.left);
    stack.push(left.right);
  }
  return true;
}
