# 543. 二叉树的直径

> 难度：简单
>
> https://leetcode-cn.com/problems/diameter-of-binary-tree/

## 题目

给定一颗二叉树，你需要计算它的直径长度。一颗二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根节点。

**示例**

```
给定二叉树

          1
         / \
        2   3
       / \     
      4   5    
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
```

**注意：**

两结点之间的路径长度是以它们之间边的数目表示。

## 解答
```typescript
/**
 * 递归 DFS
 * @desc 时间复杂度 O(n) 空间复杂度 O(h)
 * @param root { TreeNode | null }
 * @returns { number }
 */
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;
  const depth = (root) => {
    if (root === null) {
      return 0;
    }
    const l = depth(root.left);
    const r = depth(root.right);
    
    max = Math.max(max, l + r)

    return Math.max(l, r) + 1
  }

  depth(root)
  return max;
}
```