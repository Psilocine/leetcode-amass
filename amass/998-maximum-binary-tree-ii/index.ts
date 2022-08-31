import { TreeNode } from "~/utils/treeNode";

/**
 * 还原中序递归 再构造
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param val {number}
 * @returns {TreeNode | null}
 */
export function insertIntoMaxTree(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  // 中序遍历
  const res: number[] = [];
  const recover = (node) => {
    if (!node) {
      return;
    }

    recover(node.left);
    res.push(node.val);
    recover(node.right);
  };

  recover(root);
  // [1,4,2,3]
  res.push(val);
  // [1,4,2,3,5]

  const deep = (nums) => {
    if (!nums.length) return null;

    const max = Math.max(...nums);
    const idx = nums.indexOf(max);

    const node = new TreeNode(max);
    node.left = deep(nums.slice(0, idx));
    node.right = deep(nums.slice(idx + 1));

    return node;
  };

  return deep(res);
}

/**
 * 递归 dfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param val {number}
 * @returns {TreeNode | null}
 */
export function insertIntoMaxTree2(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  const node = new TreeNode(val);
  if (!root) return node;

  if (root.val < val) {
    node.left = root;
    return node;
  } else {
    root.right = insertIntoMaxTree2(root.right, val);
    return root;
  }
}

/**
 * 迭代
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param val {number}
 * @returns {TreeNode | null}
 */
export function insertIntoMaxTree3(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  const node = new TreeNode(val);
  let prev = null,
    cur = root;
  while (cur !== null && cur.val > val) {
    prev = cur;
    cur = cur.right;
  }

  if (prev === null) {
    node.left = root;
    return node;
  } else {
    prev.right = node;
    node.left = cur;
    return root;
  }
}
