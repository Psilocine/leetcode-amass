import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { constructMaximumBinaryTree } from ".";

describe("最大二叉树", () => {
  describe("dfs 分解子问题", () => {
    testCase(constructMaximumBinaryTree);
  });
});

function testCase(fn: (nums: number[]) => TreeNode | null) {
  it.each([
    // test cases
    [
      [3, 2, 1, 6, 0, 5],
      [6, 3, 5, null, 2, 0, null, null, 1],
    ],
    [
      [3, 2, 1],
      [3, null, 2, null, 1],
    ],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(createTreeNode(expected));
  });
}
