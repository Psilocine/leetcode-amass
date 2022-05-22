# 437. 路径总和 III

> 难度：中等
>
> https://leetcode.cn/problems/path-sum-iii/

## 题目

给定一个二叉树的根节点 `root` ，和一个整数 `targetSum` ，求该二叉树里节点值之和等于 `targetSum` 的 **路径** 的数目。

**路径** 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/169657377-31c5c4f2-1b1f-49b8-8221-d2d06cb83ee0.png)

```
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。
```

**示例 2**

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3
```

提示:

- 二叉树的节点个数的范围是 [0,1000]
- -109 <= Node.val <= 109
- -1000 <= targetSum <= 1000

## 解答

```typescript
/**
 * 暴力破解
 * @desc 时间复杂度 O(n ^ 2) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param targetSum {number}
 * @returns {number}
 */
export function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }
  let ans: number = rootSum(root, targetSum);
  ans += pathSum(root.left, targetSum);
  ans += pathSum(root.right, targetSum);

  return ans;
}

function rootSum(root: TreeNode | null, targetSum: number): number {
  let ans = 0;
  if (!root) {
    return ans;
  }
  if (root.val === targetSum) {
    ans++;
  }

  ans += rootSum(root.left, targetSum - root.val);
  ans += rootSum(root.right, targetSum - root.val);

  return ans;
}

/**
 * 前缀和 dfs 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param root {TreeNode | null}
 * @param targetSum {number}
 * @returns {number}
 */
export function pathSum2(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }
  const prefix = new Map();
  prefix.set(0, 1);

  const dfs = (root, curr, targetSum) => {
    if (!root) {
      return 0;
    }
    let ret = 0;
    curr += root.val;

    ret = prefix.get(curr - targetSum) || 0;
    prefix.set(curr, (prefix.get(curr) || 0) + 1);
    ret += dfs(root.left, curr, targetSum);
    ret += dfs(root.right, curr, targetSum);
    prefix.set(curr, (prefix.get(curr) || 0) - 1);

    return ret;
  };

  const ans: number = dfs(root, 0, targetSum);

  return ans;
}
```
