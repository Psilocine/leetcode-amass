import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { findFrequentTreeSum } from ".";

describe("出现次数最多的子树元素和", () => {
  describe("dfs + 遍历", () => {
    testCase(findFrequentTreeSum);
  });
});

function testCase(fn: (root: TreeNode | null) => number[]) {
  it.each([
    // test cases
    [
      [5, 2, -3],
      [2, -3, 4],
    ],
    [[5, 2, -5], [2]],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(expected);
  });
}
