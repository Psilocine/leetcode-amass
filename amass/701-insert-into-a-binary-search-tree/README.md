# 701. 二叉搜索树中的插入操作

> 难度：中等
>
> https://leetcode.cn/problems/insert-into-a-binary-search-tree/

## 题目

给定二叉搜索树（BST）的根节点  root  和要插入树中的值  value ，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据 保证 ，新值和原始二叉搜索树中的任意节点值都不同。

注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 任意有效的结果 。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/175261475-376b4de1-9f98-4d74-b26a-8aa6fc306057.png)

```
输入：root = [4,2,7,1,3], val = 5
输出：[4,2,7,1,3,5]
解释：另一个满足题目要求可以通过的树是：
```

![image](https://user-images.githubusercontent.com/25545052/175261477-5224d2a4-3315-4ab3-b897-8947f361583d.png)

**示例 2**

```
输入：root = [40,20,60,10,30,50,70], val = 25
输出：[40,20,60,10,30,50,70,null,null,25]
```

**示例 3**

```
输入：root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
输出：[4,2,7,1,3,5]
```

提示：

- 树中的节点数将在  [0, 10^4] 的范围内。
- -10^8 <= Node.val <= 10^8
- 所有值  Node.val  是   独一无二   的。
- -10^8 <= val <= 10^8
- 保证  val  在原始 BST 中不存在。

## 解答

```typescript
/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param val {number}
 * @returns {TreeNode | null}
 */
export function insertIntoBST(
  root: TreeNode | null,
  val: number
): TreeNode | null {
  if (!root) {
    root = new TreeNode(val);
    return root;
  }

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}
```
