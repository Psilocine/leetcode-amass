import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * 难点：维护两个和的值，一个外部和 sum，一个内部返回给父节点的最佳和（即左节点或右节点）
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {number}
 */
export function maxPathSum(root: TreeNode | null): number {
  let sum = -Infinity;
  const traveser = (root: TreeNode | null) => {
    if (!root) {
      return 0;
    }

    const lp = traveser(root.left);
    const rp = traveser(root.right);

    // 更新外部和
    sum = Math.max(
      sum,
      lp + rp + root.val,
      root.val,
      root.val + lp,
      root.val + rp
    );
    // 返回内部和（给父节点的
    return Math.max(root.val, root.val + lp, root.val + rp);
  };

  traveser(root);
  return sum;
}
