import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { maxLevelSum } from ".";

describe("最大层内元素和", () => {
  describe("Name of the group", () => {
    testCase(maxLevelSum);
  });
});

function testCase(fn: (root: TreeNode | null) => number) {
  it.each([
    // test cases
    [[1, 7, 0, 7, -8, null, null], 2],
    [[989, null, 10250, 98693, -89388, null, null, null, -32127], 2],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toBe(expected);
  });
}
