import { describe, expect, it } from "vitest";
import { TreeNode, createTreeNode } from "~/utils/treeNode";
import { inorderTraversal, inorderTraversal2 } from ".";

describe("二叉树的中序遍历", () => {
  describe("递归", () => {
    testCase(inorderTraversal);
  });

  describe('迭代', () => {
    testCase(inorderTraversal2);
  });
});

function testCase(fn: (root: TreeNode | null) => number[]) {
  it.each([
    // test cases
    [
      [1, null, 2, 3],
      [1, 3, 2],
    ],
    [[], []],
    [[1], [1]],
    [
      [1, 2],
      [2, 1],
    ],
    [
      [1, null, 2],
      [1, 2],
    ],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected);
  });
}
