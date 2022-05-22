import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { convertBST, convertBST2 } from ".";

describe("把二叉搜索树转换为累加树", () => {
  describe("DFS 反向中序", () => {
    testCase(convertBST);
  });
  describe('Morris 反向遍历', () => {
    testCase(convertBST2);
  });
});

function testCase(fn: (root: TreeNode | null) => TreeNode | null) {
  it.each([
    // test cases
    [
      [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8],
      [30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8],
    ],
    [
      [1, 0, 2],
      [3, 3, 2],
    ],
    [
      [3, 2, 4, 1],
      [7, 9, 4, 10],
    ],
    [
      [0, null, 1],
      [1, null, 1],
    ],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(createTreeNode(expected));
  });
}
