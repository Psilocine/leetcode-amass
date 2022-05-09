# 98. 验证二叉搜索树

> 难度：中等
>
> https://leetcode.cn/problems/validate-binary-search-tree/

## 题目

给你一个二叉树的根节点 `root` ，判断其是否是一个有效的二叉搜索树。

**有效** 二叉搜索树定义如下：

节点的左子树只包含 **小于** 当前节点的数。
节点的右子树只包含 **大于** 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/167404743-d6048d9b-d659-4e7c-8821-b94e4f305d0d.png)

```
输入：root = [2,1,3]
输出：true
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/167404738-1b9ca78d-ddb5-4540-8f73-541a4d34bb3f.png)

```
输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。
```

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * 递归
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isValidBST(root: TreeNode | null): boolean {
  const dfs = (root, lower, upper) => {
    if (!root) {
      return true;
    }
    if (root.val <= lower || root.val >= upper) {
      return false;
    }

    return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper);
  };

  return dfs(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

/**
 * 中序排列
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {boolean}
 */
export function isValidBST2(root: TreeNode | null): boolean {
  const stack = [];
  let inorder = Number.MIN_VALUE;

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    // 如果中序遍历得到的节点的值小于前一个 inorder，则不符合
    if (root.val <= inorder) {
      return false;
    }

    inorder = root.val;
    root = root.right;
  }

  return true;
}
```
