# 108. 将有序数组转换为二叉搜索树

> 难度：简单
>
> https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/

## 题目

给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/195335329-cb427c6a-8a62-4937-a13b-7ce2512149a0.png)

```
输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：
```

![image](https://user-images.githubusercontent.com/25545052/195335352-e0c173c1-52ef-43da-a7a2-59411c5fbb37.png)

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/195335357-a66c92c2-9952-4b72-808d-dca958f212c9.png)

```
输入：nums = [1,3]
输出：[3,1]
解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
```

提示：

- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums 按 严格递增 顺序排列

## 解答

```typescript
import { TreeNode } from "~/utils/treeNode";

/**
 * 中序遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @returns {TreeNode | null}
 */
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  const deep = (left: number, right: number) => {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = deep(left, mid - 1);
    node.right = deep(mid + 1, right);

    return node;
  };

  return deep(0, nums.length - 1);
}
```
