import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { isSameTree } from ".";

describe("相同的树", () => {
  describe("dfs", () => {
    testCase(isSameTree);
  });
});

function testCase(fn: (p: TreeNode | null, q: TreeNode | null) => boolean) {
  it.each([
    // test cases
    [[1, 2, 3], [1, 2, 3], true],
    [[1, 2], [1, null, 2], false],
    [[1, 2, 1], [1, 1, 2], false],
  ])("示例%#", (p, q, expected) => {
    expect(fn(createTreeNode(p), createTreeNode(q))).toBe(expected);
  });
}
