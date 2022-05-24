import { describe, expect, it } from "vitest";
import { TreeNode, createTreeNode } from "~/utils/treeNode";
import { deleteNode, deleteNode2 } from ".";
describe("删除二叉搜索树中的节点", () => {
  describe("Name of the group", () => {
    testCase(deleteNode);
  });
});

function testCase(fn: (root: TreeNode | null, key: number) => TreeNode | null) {
  it.each([
    // test cases
    [[5, 3, 6, 2, 4, null, 7], 3, [5, 4, 6, 2, null, null, 7]],
    [[5, 3, 6, 2, 4, null, 7], 0, [5, 3, 6, 2, 4, null, 7]],
    [[], 0, []],
  ])("示例%#", (root, key, expected) => {
    expect(fn(createTreeNode(root), key)).toEqual(createTreeNode(expected));
  });
}
