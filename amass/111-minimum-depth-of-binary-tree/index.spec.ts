import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { minDepth, minDepth2 } from ".";

describe("二叉树的最小深度", () => {
  describe("bfs", () => {
    testCase(minDepth);
  });

  describe("dfs", () => {
    testCase(minDepth2);
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    // test cases
    [[3, 9, 20, null, null, 15, 7], 2],
    [[2, null, 3, null, 4, null, 5, null, 6], 5],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected);
  });
}
