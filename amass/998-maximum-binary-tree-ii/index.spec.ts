import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { insertIntoMaxTree, insertIntoMaxTree2, insertIntoMaxTree3 } from ".";

describe("最大二叉树 II", () => {
  describe("中序遍历再构造", () => {
    testCase(insertIntoMaxTree);
  });

  describe("dfs", () => {
    testCase(insertIntoMaxTree2);
  });

  describe("迭代", () => {
    testCase(insertIntoMaxTree3);
  });
});

function testCase(fn: (root: TreeNode | null, val: number) => TreeNode | null) {
  it.each([
    // test cases
    [[4, 1, 3, null, null, 2], 5, [5, 4, null, 1, 3, null, null, 2]],
    [[5, 2, 4, null, 1], 3, [5, 2, 4, null, 1, null, 3]],
    [[5, 2, 3, null, 1], 4, [5, 2, 4, null, 1, 3]],
  ])("示例%#", (root, val, expected) => {
    expect(fn(createTreeNode(root), val)).toEqual(createTreeNode(expected));
  });
}
