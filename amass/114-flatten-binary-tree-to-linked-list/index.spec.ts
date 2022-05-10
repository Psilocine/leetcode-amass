import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { flatten, flatten2, flatten3 } from ".";

describe("二叉树展开为链表", () => {
  describe("前序遍历 - 递归", () => {
    testCase(flatten);
  });

  describe("前序遍历 - 栈", () => {
    testCase(flatten2);
  });

  describe("寻找前驱节点", () => {
    testCase(flatten3);
  });
});

function testCase(fn: (root: TreeNode | null) => TreeNode | null) {
  it.each([
    // test cases
    [
      [1, 2, 5, 3, 4, null, 6],
      [1, null, 2, null, 3, null, 4, null, 5, null, 6],
    ],
    [[], []],
    [[0], [0]],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(createTreeNode(expected));
  });
}
