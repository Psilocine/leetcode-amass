import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { pruneTree } from ".";

describe("二叉树剪枝", () => {
  describe("后序 dfs", () => {
    testCase(pruneTree);
  });
});

function testCase(fn: (root: TreeNode | null) => TreeNode | null) {
  it.each([
    // test cases
    [
      [1, null, 0, 0, 1],
      [1, null, 0, null, 1],
    ],
    [
      [1, 0, 1, 0, 0, 0, 1],
      [1, null, 1, null, 1],
    ],
    [
      [1, 1, 0, 1, 1, 0, 1, 0],
      [1, 1, 0, 1, 1, null, 1],
    ],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(createTreeNode(expected));
  });
}
