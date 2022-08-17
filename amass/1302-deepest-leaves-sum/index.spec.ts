import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { deepestLeavesSum, deepestLeavesSum2 } from ".";

describe("层数最深叶子节点的和", () => {
  describe("深度优先搜索 DFS", () => {
    testCase(deepestLeavesSum);
  });
  describe("广度优先搜索 BFS", () => {
    testCase(deepestLeavesSum2);
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    // test cases
    [[1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8], 15],
    [[6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5], 19],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected);
  });
}
