import { describe, expect, it } from "vitest";
import { lowestCommonAncestor, lowestCommonAncestor2 } from ".";
import { createTreeNode, TreeNode } from "~/utils/treeNode";

describe("二叉树的最近公共祖先", () => {
  describe("递归 - 后序", () => {
    testCase(lowestCommonAncestor);
  });
  describe('递归 - 后序 2', () => {
    testCase(lowestCommonAncestor2);
  });
});

function testCase(
  fn: (root: TreeNode | null, p: TreeNode, q: TreeNode) => TreeNode | null
) {
  it.each([
    // test cases
    [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1, 3],
    [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4, 5],
    [[1, 2], 1, 2, 1],
  ])("示例%#", (root, p, q, expected) => {
    expect((fn(createTreeNode(root), new TreeNode(p), new TreeNode(q)))?.val || null).toEqual(
      expected
    );
  });
}
