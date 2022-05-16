import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { successorLcci, successorLcci2 } from ".";

describe("后继者", () => {
  describe("递归", () => {
    testCase(successorLcci);
  });
  describe("迭代", () => {
    testCase(successorLcci2);
  });
});

function testCase(
  fn: (root: TreeNode | null, p: TreeNode | null) => TreeNode | null
) {
  it.each([
    // test cases
    [[2, 1, 3], 1, 2],
    [[5, 3, 6, 2, 4, null, null, 1], 6, null],
  ])("示例%#", (root, p, expected) => {
    expect(fn(createTreeNode(root), new TreeNode(p))?.val || null).toEqual(
      new TreeNode(expected)?.val
    );
  });
}
