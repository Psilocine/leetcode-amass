import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { addOneRow } from ".";

describe("在二叉树中增加一行", () => {
  describe("dfs", () => {
    testCase(addOneRow);
  });
});

function testCase(
  fn: (root: TreeNode | null, val: number, depth: number) => TreeNode | null
) {
  it.each([
    // test cases
    [[1, 2, 3, 4], 5, 4, [1, 2, 3, 4, null, null, null, 5, 5]],
    [[4, 2, 6, 3, 1, 5], 1, 2, [4, 1, 1, 2, null, null, 6, 3, 1, 5]],
    [[4, 2, null, 3, 1], 1, 3, [4, 2, null, 1, 1, 3, null, null, 1]],
  ])("示例%#", (root, val, depth, expected) => {
    expect(fn(createTreeNode(root), val, depth)).toEqual(
      createTreeNode(expected)
    );
  });
}
