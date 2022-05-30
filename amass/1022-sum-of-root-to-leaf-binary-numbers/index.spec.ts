import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { sumRootToLeaf } from ".";

describe("从根到叶的二进制数之和", () => {
  describe("dfs", () => {
    testCase(sumRootToLeaf);
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    // test cases
    [[1, 0, 1, 0, 1, 0, 1], 22],
    [[0], 0],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected);
  });
}
