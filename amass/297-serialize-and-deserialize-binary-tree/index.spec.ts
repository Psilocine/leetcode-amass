import { describe, expect, it } from "vitest";
import { createTreeNode, TreeNode } from "~/utils/treeNode";
import { serialize, deserialize, serialize2, deserialize2 } from ".";

describe("二叉树的序列化与反序列化", () => {
  describe("dfs 递归", () => {
    testCase(serialize, deserialize);
  });
  describe("bfs 队列", () => {
    testCase(serialize2, deserialize2);
  });
});

function testCase(
  serialize: (root: TreeNode | null) => string,
  deserialize: (data: string) => TreeNode | null
) {
  it.each([
    // test cases
    [[1, 2, 3, null, null, 4, 5], "1,2,null,null,3,4,null,null,5,null,null"],
    [[], "null"],
    [[1], "1,null,null"],
    [[1, 2], "1,2,null,null,null"],
  ])("示例%#", (arr, str) => {
    const root = createTreeNode(arr);
    expect(deserialize(serialize(root))).toEqual(root);
  });
}
