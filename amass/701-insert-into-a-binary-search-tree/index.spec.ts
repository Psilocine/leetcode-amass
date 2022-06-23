import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { insertIntoBST } from ".";

describe("二叉搜索树中的插入操作", () => {
  describe("递归", () => {
    testCase(insertIntoBST);
  });
});

function testCase(fn: (root: TreeNode | null, val: number) => TreeNode | null) {
  it.each([
    // test cases
    [[4, 2, 7, 1, 3], 5, [4, 2, 7, 1, 3, 5]],
    [
      [40, 20, 60, 10, 30, 50, 70],
      25,
      [40, 20, 60, 10, 30, 50, 70, null, null, 25],
    ],
    [
      [4, 2, 7, 1, 3, null, null, null, null, null, null],
      5,
      [4, 2, 7, 1, 3, 5],
    ],
  ])("示例%#", (root, val, expected) => {
    expect(fn(createTreeNode(root), val)).toEqual(createTreeNode(expected));
  });
}
