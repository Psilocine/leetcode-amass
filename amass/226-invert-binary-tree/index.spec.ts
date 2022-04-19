import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { invertTree, invertTree2, invertTree3 } from ".";

describe("翻转二叉树", () => {
  describe("递归 - DFS - 前序", () => {
    testCase(invertTree);
  });
  describe("递归 - DFS - 后序", () => {
    testCase(invertTree2);
  });

  describe('递归 - BFS', () => {
    testCase(invertTree3);
  });
});

function testCase(fn: (root: TreeNode | null) => TreeNode | null) {
  it.each([
    // test cases
    [
      [4, 2, 7, 1, 3, 6, 9],
      [4, 7, 2, 9, 6, 3, 1],
    ],
    [
      [2, 1, 3],
      [2, 3, 1],
    ],
    [[], []],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(createTreeNode(expected));
  });
}
