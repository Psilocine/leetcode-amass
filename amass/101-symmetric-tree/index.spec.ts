import { describe, expect, it } from "vitest";
import { TreeNode, createTreeNode } from "~/utils/treeNode";
import { isSymmetric, isSymmetric2, isSymmetric3 } from ".";

describe("对称二叉树", () => {
  describe("递归", () => {
    testCase(isSymmetric);
  });
  describe("迭代 - 队列", () => {
    testCase(isSymmetric2);
  });
  describe("迭代 - 栈", () => {
    testCase(isSymmetric3);
  });
});

function testCase(fn: (root: TreeNode | null) => boolean) {
  it.each([
    // test cases
    [[], true],
    [[1], true],
    [[1, 2, 2, 3, 4, 4, 3], true],
    [[1, 2, 2, null, 3, null, 3], false],
    [[1, 2, 2, 2, null, 2], false],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toStrictEqual(expected);
  });
}
