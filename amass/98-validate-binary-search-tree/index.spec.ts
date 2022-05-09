import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { isValidBST, isValidBST2 } from ".";

describe("验证二叉搜索树", () => {
  describe("DFS", () => {
    testCase(isValidBST);
  });

  describe("中序排列", () => {
    testCase(isValidBST2);
  });
});

function testCase(fn: (root: TreeNode | null) => boolean) {
  it.each([
    // test cases
    [[5, 1, 4, null, null, 3, 6], false],
    [[2, 1, 3], true],
    [[5, 4, 6, null, null, 3, 7], false],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(expected);
  });
}
