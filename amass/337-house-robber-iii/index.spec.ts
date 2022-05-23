import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { rob } from ".";

describe("打家劫舍 III", () => {
  describe("dfs 递归 - 后序", () => {
    testCase(rob);
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    // test cases
    [[3, 2, 3, null, 3, null, 1], 7],
    [[3, 4, 5, 1, 3, null, 1], 9],
    [[2, 1, 3, null, 4], 7],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(expected);
  });
}
