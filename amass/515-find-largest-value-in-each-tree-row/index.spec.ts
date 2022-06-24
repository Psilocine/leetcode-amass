import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { largestValues } from ".";

describe("在每个树行中找最大值", () => {
  describe("bfs", () => {
    testCase(largestValues);
  });
});

function testCase(fn: (root: TreeNode | null) => number[]) {
  it.each([
    // test cases
    [
      [1, 3, 2, 5, 3, null, 9],
      [1, 3, 9],
    ],
    [
      [1, 2, 3],
      [1, 3],
    ],
  ])("示例%#", (root, expected) => {
    expect(fn(createTreeNode(root))).toEqual(expected);
  });
}
