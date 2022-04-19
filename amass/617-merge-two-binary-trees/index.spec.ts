import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { mergeTrees, mergeTrees2 } from ".";

describe("合并二叉树", () => {
  describe("递归 - DFS", () => {
    testCase(mergeTrees);
  });
  describe("递归 - BFS", () => {
    testCase(mergeTrees2);
  });
});

function testCase(
  fn: (root1: TreeNode | null, root2: TreeNode | null) => TreeNode | null
) {
  it.each([
    // test cases
    [
      [1, 3, 2, 5],
      [2, 1, 3, null, 4, null, 7],
      [3, 4, 5, 5, 4, null, 7],
    ],
    [[1], [1, 2], [2, 2]],
  ])("示例%#", (root1, root2, expected) => {
    expect(fn(createTreeNode(root1), createTreeNode(root2))).toEqual(
      createTreeNode(expected)
    );
  });
}
