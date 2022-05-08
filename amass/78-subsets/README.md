# 78. 子集

> 难度：中等
>
> https://leetcode-cn.com/problems/subsets/

## 题目

给你一个整数数组 `nums` ，数组中的元素 **互不相同** 。返回该数组所有可能的子集（幂集）。

解集 **不能** 包含重复的子集。你可以按 **任意顺序** 返回解集。

**示例 1**

```
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

**示例 2：**

```
输入：nums = [0]
输出：[[],[0]]
```

**提示：**

- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10
- nums 中的所有元素 互不相同

## 解答

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(n * 2^n) 空间复杂度 O(n * 2^n)
 * @param nums {number[]}
 * @returns {number[][]}
 */
export function subsets(nums: number[]): number[][] {
  const ans = [];
  const path = [];

  const backtrack = (startIdx) => {
    ans.push(path.slice());

    for (let i = startIdx; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  };
  backtrack(0);
  return ans;
}
```
