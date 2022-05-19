# 654. 最大二叉树

> 难度：中等
>
> https://leetcode.cn/problems/maximum-binary-tree/

## 题目

给定一个不重复的整数数组 `nums` 。  **最大二叉树** 可以用下面的算法从 `nums` 递归地构建:

1. 创建一个根节点，其值为  nums 中的最大值。
2. 递归地在最大值   左边   的   子数组前缀上   构建左子树。
3. 递归地在最大值 右边 的   子数组后缀上   构建右子树。

返回 `nums` 构建的 **最大二叉树** 。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/168807710-44d79627-3e36-4dc8-a024-5340f0de7b37.png)

```
输入：nums = [3,2,1,6,0,5]
输出：[6,3,5,null,2,0,null,null,1]
解释：递归调用如下所示：
- [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
    - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
        - 空数组，无子节点。
        - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
            - 空数组，无子节点。
            - 只有一个元素，所以子节点是一个值为 1 的节点。
    - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
        - 只有一个元素，所以子节点是一个值为 0 的节点。
        - 空数组，无子节点。
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/168807707-9c0d6f4e-0b2a-418a-a3fd-6324966719a9.png)

```
输入：nums = [3,2,1]
输出：[3,null,2,null,1]
```

提示：

- 1 <= nums.length <= 1000
- 0 <= nums[i] <= 1000
- nums 中的所有整数 互不相同

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * dfs 递归 分解子问题
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {TreeNode | null}
 */
export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }
  const root: number = Math.max(...nums);
  const rootIdx = nums.indexOf(root);

  const node = new TreeNode(root);

  node.left = constructMaximumBinaryTree(nums.slice(0, rootIdx));
  node.right = constructMaximumBinaryTree(nums.slice(rootIdx + 1));

  return node;
}
```
