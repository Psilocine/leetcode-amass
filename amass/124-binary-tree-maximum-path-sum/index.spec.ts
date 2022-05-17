import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { maxPathSum } from ".";

describe("二叉树中的最大路径和", () => {
  describe("递归", () => {
    testCase(maxPathSum);
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    // test cases
    [[0], 0],
    [[2, -1], 2],
    [[1, 2, 3], 6],
    [[-10, 9, 20, null, null, 15, 7], 42],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(expected);
  });
}
