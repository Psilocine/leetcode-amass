# 538. 把二叉搜索树转换为累加树

> 难度：中等
>
> https://leetcode.cn/problems/convert-bst-to-greater-tree/

## 题目

给出二叉 **搜索** 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 `node` 的新值等于原树中大于或等于  `node.val`  的值之和。

提醒一下，二叉搜索树满足下列约束条件：

- 节点的左子树仅包含键 **小于** 节点键的节点。
- 节点的右子树仅包含键 **大于** 节点键的节点。
- 左右子树也必须是二叉搜索树。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/169657673-4fc6e93e-17b4-498c-8792-c490bab4231b.png)

```
输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

**示例 2**

```
输入：root = [0,null,1]
输出：[1,null,1]
```

**示例 3**

```
输入：root = [1,0,2]
输出：[3,3,2]
```

**示例 4**

```
输入：root = [3,2,4,1]
输出：[7,9,4,10]
```

提示：

- 树中的节点数介于 0  和 104  之间。
- 每个节点的值介于 -104  和  104  之间。
- 树中的所有值 互不相同 。
- 给定的树为二叉搜索树。

## 解答

```typescript
/**
 * 反序中序遍历（右根左） dfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @returns {TreeNode | null}
 */
export function convertBST(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  let sum = 0;
  const traveser = (root) => {
    if (!root) {
      return null;
    }

    traveser(root.right);
    sum += root.val;
    root.val = sum;
    traveser(root.left);
  };

  traveser(root);

  return root;
}

/**
 * 反向 Morris 遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param root {TreeNode | null}
 * @returns {TreeNode | null}
 */
export function convertBST2(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  let sum: number = 0;
  let cur: TreeNode = root;
  let mostLeft: TreeNode | null = null;

  while (cur) {
    mostLeft = cur.right;
    // 当前节点有右树
    if (mostLeft) {
      // 找到最左节点
      while (mostLeft.left !== null && mostLeft.left !== cur) {
        mostLeft = mostLeft.left;
      }
      // 最左节点 mostLeft 的左节点为 null
      if (mostLeft.left === null) {
        mostLeft.left = cur;
        cur = cur.right;
        continue;
      } else {
        mostLeft.left = null;
      }
    }
    sum += cur.val;
    cur.val = sum;
    cur = cur.left;
  }

  return root;
}
```
