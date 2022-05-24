import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { searchBST, searchBST2 } from ".";

describe("二叉搜索树中的搜索", () => {
  describe("dfs", () => {
    testCase(searchBST);
  });

  describe("迭代", () => {
    testCase(searchBST2);
  });
});

function testCase(fn: (root: TreeNode | null, val: number) => TreeNode | null) {
  it.each([
    // test cases
    [[4, 2, 7, 1, 3], 2, [2, 1, 3]],
    [[4, 2, 7, 1, 3], 5, []],
  ])("示例%#", (root, val, expected) => {
    expect(fn(createTreeNode(root), val)).toEqual(createTreeNode(expected));
  });
}
