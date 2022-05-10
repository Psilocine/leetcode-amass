import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { levelOrder, levelOrder2 } from ".";

describe("二叉树的层序遍历", () => {
  describe("BFS - 递归", () => {
    testCase(levelOrder);
  });

  describe('BFS - 栈', () => {
    testCase(levelOrder2);
  });
});

function testCase(fn: (root: TreeNode | null) => number[][]) {
  it.each([
    // test cases
    [
      [3, 9, 20, null, null, 15, 7],
      [[3], [9, 20], [15, 7]],
    ],
    [[1], [[1]]],
    [[], []],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(expected);
  });
}
