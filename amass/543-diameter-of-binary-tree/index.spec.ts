import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { diameterOfBinaryTree } from '.'

describe("二叉树的直径", () => {
  describe('递归 - DFS', () => {
    testCase(diameterOfBinaryTree)
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    // test cases
    [[1,2,3,4,5], 3],
    [[1,2], 1]
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected);
  });
}
