import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";

import { maxDepth, maxDepth2 } from ".";

describe("二叉树的最大深度", () => {
  describe("遍历", () => {
    testCase(maxDepth);
  });
  describe("迭代", () => {
    testCase(maxDepth2);
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    // test cases
    [[3, 9, 20, null, null, 15, 7], 3],
    [[1, null, 2], 2],
    [[1, 2, 3, 4, null, null, 5], 3],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(expected);
  });
}
