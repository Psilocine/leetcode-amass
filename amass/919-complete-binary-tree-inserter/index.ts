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
 * BFS
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 */
export class CBTInserter {
  private list: TreeNode[] = new Array<TreeNode>();
  private idx: number = 0;
  constructor(root: TreeNode | null) {
    this.list.push(root);
    let cur = 0;
    while (cur < this.list.length) {
      const node = this.list[cur];
      if (node.left !== null) this.list.push(node.left);
      if (node.right !== null) this.list.push(node.right);
      cur++;
    }
  }

  insert(val: number): number {
    const node = new TreeNode(val);
    while (
      this.list[this.idx].left !== null &&
      this.list[this.idx].right !== null
    )
      this.idx++;
    const fa = this.list[this.idx];
    if (fa.left === null) fa.left = node;
    else if (fa.right === null) fa.right = node;
    this.list.push(node);
    return fa.val;
  }

  get_root(): TreeNode | null {
    return this.list[0];
  }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
