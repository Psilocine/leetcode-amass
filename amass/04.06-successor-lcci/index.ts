import { TreeNode } from "~/utils/treeNode";

/**
 * 二叉搜索树
 * 每个节点有唯一的值
 * 若左子树不为空，左子树的所有节点均小于根节点的值
 * 若右子树不为空，右子树的所有节点均大于根节点的值
 */

/**
 * 递归 - 中序遍历
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param root {TreeNode | null}
 * @param p {TreeNode}
 * @returns {TreeNode | null}
 */
export function successorLcci(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }
  const res: TreeNode[] = [];
  const traverse = (root: TreeNode) => {
    if (!root) {
      return null;
    }

    traverse(root.left);
    res.push(root);
    traverse(root.right);
  }

  traverse(root)

  for (let i = 0; i < res.length - 1; i++) {
    if (res[i].val === p.val) {
      return res[i + 1]
    }
  }

  return null;
}


/**
 * 迭代
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param root {TreeNode | null}
 * @param p {TreeNode | null}
 * @returns {TreeNode | null}
 */
export function successorLcci2(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
  if (!root) {
    return null
  }
  let ans: TreeNode | null = null;
  let curr: TreeNode | null = root;

  while(curr) {
    if (curr.val > p.val) {
      ans = curr
      curr = curr.left
    } else {
      curr = curr.right;
    }
  }

  return ans;
}