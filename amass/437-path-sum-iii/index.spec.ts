import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { pathSum, pathSum2 } from ".";

describe("路径总和 III", () => {
  describe("暴力解法", () => {
    testCase(pathSum);
  });
  describe('前缀和 dfs + 哈希表', () => {
    testCase(pathSum2)
  });
});

function testCase(fn: (root: TreeNode | null, targetSum: number) => number) {
  it.each([
    // test cases
    [[10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 8, 3],
    [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22, 3],
  ])("示例%#", (root, targetSum, expected) => {
    expect(fn(createTreeNode(root), targetSum)).toEqual(expected);
  });
}
