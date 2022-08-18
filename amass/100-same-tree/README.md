# 100. 相同的树

> 难度：简单
>
> https://leetcode.cn/problems/same-tree/

## 题目

给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/185372073-7344aa9c-180b-4bef-ab0c-a8a35273846d.png)

```
输入：p = [1,2,3], q = [1,2,3]
输出：true
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/185372090-5dfe440b-4337-488a-a2f2-e46c1308af24.png)

```
输入：p = [1,2], q = [1,null,2]
输出：false
```

**示例 3**

![image](https://user-images.githubusercontent.com/25545052/185372219-33ab2632-1202-4f0c-b629-a36d7c51a852.png)

```
输入：p = [1,2,1], q = [1,1,2]
输出：false
```

提示：

- 两棵树上的节点数目都在范围 [0, 100] 内
- -10^4 <= Node.val <= 10^4

## 解答

```typescript
/**
 * dfs
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param p {TreeNode | null}
 * @param q {TreeNode | null}
 * @returns boolean
 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```
