# 90. 子集 II

> 难度：中等
>
> https://leetcode.cn/problems/subsets-ii/

## 题目

给你一个整数数组 `nums` ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 **不能** 包含重复的子集。返回的解集中，子集可以按 **任意顺序** 排列。

**示例 1**

```
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
```

**示例 2**

```
输入：nums = [0]
输出：[[],[0]]
```

提示：

- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10

## 解答

```typescript
/**
 * 回溯 dfs
 * 排序，让相同的元素靠在一起
 * @desc 时间复杂度 O(n * 2 ^ n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number[][]}
 */
export function subsetsWithDup(nums: number[]): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];

  nums.sort((a, b) => a - b);
  const backtrack = (start: number) => {
    ans.push(path.slice());
    if (start > nums.length - 1) {
      return;
    }

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i - 1] === nums[i]) continue;

      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack(0);

  return ans;
}
```
