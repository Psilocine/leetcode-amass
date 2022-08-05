# 623. 在二叉树中增加一行

> 难度：中等
>
> https://leetcode.cn/problems/add-one-row-to-tree/

## 题目

给定一个二叉树的根  root  和两个整数 val 和  depth ，在给定的深度  depth  处添加一个值为 val 的节点行。

注意，根节点  root  位于深度  1 。

加法规则如下:

- 给定整数  depth，对于深度为  depth - 1 的每个非空树节点 cur ，创建两个值为 val 的树节点作为 cur 的左子树根和右子树根。
- cur 原来的左子树应该是新的左子树根的左子树。
- cur 原来的右子树应该是新的右子树根的右子树。
- 如果 depth == 1 意味着  depth - 1  根本没有深度，那么创建一个树节点，值 val 作为整个原始树的新根，而原始树就是新根的左子树。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/183090240-ef4ccf05-9601-4c69-8436-b2555138500d.png)

```
输入: root = [4,2,6,3,1,5], val = 1, depth = 2
输出: [4,1,1,2,null,null,6,3,1,5]
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/183090328-92726980-ebb9-409f-a503-fbc76dbcf581.png)

```
输入: root = [4,2,null,3,1], val = 1, depth = 3
输出:  [4,2,null,1,1,3,null,null,1]
```

提示:

- 节点数在  [1, 104]  范围内
- 树的深度在  [1, 104]范围内
- -100 <= Node.val <= 100
- -10^5 <= val <= 10^5
- 1 <= depth <= the depth of tree + 1

## 解答

```typescript
/**
 * 深度优先搜索
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param val {number}
 * @param depth {number}
 * @returns {TreeNode | null}
 */
export function addOneRow(
  root: TreeNode | null,
  val: number,
  depth: number
): TreeNode | null {
  if (!root) return null;

  if (depth === 1) {
    root = new TreeNode(val, root, null);
  }
  if (depth === 2) {
    root.left = new TreeNode(val, root.left, null);
    root.right = new TreeNode(val, null, root.right);
  } else {
    root.left = addOneRow(root.left, val, depth - 1);
    root.right = addOneRow(root.right, val, depth - 1);
  }

  return root;
}
```
