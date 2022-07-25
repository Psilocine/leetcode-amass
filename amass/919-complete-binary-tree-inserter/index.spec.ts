import { create } from "domain";
import { describe, expect, it } from "vitest";
import { createTreeNode } from "~/utils/treeNode";
import { CBTInserter } from ".";

it("完全二叉树插入器", () => {
  const cBTInserter = new CBTInserter(createTreeNode([1, 2]));
  expect(cBTInserter.insert(3)).toBe(1); // 返回 1
  expect(cBTInserter.insert(4)).toBe(2); // 返回 2
  expect(cBTInserter.get_root()).toEqual(createTreeNode([1, 2, 3, 4])); // 返回 [1, 2, 3, 4]
});
