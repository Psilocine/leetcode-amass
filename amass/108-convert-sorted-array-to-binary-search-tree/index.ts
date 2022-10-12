import { TreeNode } from "~/utils/treeNode";

/**
 * 中序遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @returns {TreeNode | null}
 */
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  const deep = (left: number, right: number) => {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = deep(left, mid - 1);
    node.right = deep(mid + 1, right);

    return node;
  };

  return deep(0, nums.length - 1);
}
