import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { preorderTraversal, preorderTraversal2 } from ".";

describe("二叉树的前序遍历", () => {
  describe("递归", () => {
    testCase(preorderTraversal);
  });
  describe("栈", () => {
    testCase(preorderTraversal2);
  });
});

function testCase(fn: (root: TreeNode | null) => number[]) {
  it.each([
    // test cases
    [
      [1, null, 2, 3],
      [1, 2, 3],
    ],
    [[], []],
    [[1], [1]],
    [
      [1, 2],
      [1, 2],
    ],
    [
      [1, null, 2],
      [1, 2],
    ],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(expected);
  });
}
