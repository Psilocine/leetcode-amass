import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { buildTree } from ".";

describe("从前序与中序遍历序列构造二叉树", () => {
  describe("递归", () => {
    testCase(buildTree);
  });
});

function testCase(
  fn: (preorder: number[], inorder: number[]) => TreeNode | null
) {
  it.each([
    // test cases
    [
      [3, 9, 20, 15, 7],
      [9, 3, 15, 20, 7],
      [3, 9, 20, null, null, 15, 7],
    ],
    [[-1], [-1], [-1]],
  ])("示例%#", (preorder, inorder, expected) => {
    expect(fn(preorder, inorder)).toEqual(createTreeNode(expected));
  });
}
