import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { isUnivalTree, isUnivalTree2 } from ".";

describe("单值二叉树", () => {
  describe("dfs", () => {
    testCase(isUnivalTree);
  });

  describe("bfs", () => {
    testCase(isUnivalTree2);
  });
});

function testCase(fn: (root: TreeNode | null) => boolean) {
  it.each([
    // test cases
    [[2, 2, 2, 5, 2], false],
    [[2, 2, 2, 5, 2], false],
    [[1, 1, 1, 1, 1, null, 1], true],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(expected);
  });
}
