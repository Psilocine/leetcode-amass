import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { sortedArrayToBST } from ".";

describe("将有序数组转换为二叉搜索树", () => {
  describe("中序遍历", () => {
    testCase(sortedArrayToBST);
  });
});

function testCase(fn: (nums: number[]) => TreeNode | null) {
  it.each([
    // test cases
    [
      [-10, -3, 0, 5, 9],
      [0, -10, 5, null, -3, null, 9],
    ],
    [
      [1, 3],
      [1, null, 3],
    ],
  ])("示例%#", (nums, expected) => {
    expect(fn(nums)).toEqual(createTreeNode(expected));
  });
}
