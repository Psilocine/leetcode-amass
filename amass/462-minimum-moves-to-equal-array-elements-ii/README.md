# 462. 最少移动次数使数组元素相等 II

> 难度：中等
>
> https://leetcode.cn/problems/minimum-moves-to-equal-array-elements-ii/

## 题目

给你一个长度为 `n` 的整数数组 `nums` ，返回使所有数组元素相等需要的最少移动数。

在一步操作中，你可以使数组中的一个元素加 `1` 或者减 `1` 。

**示例 1**

```
输入：nums = [1,2,3]
输出：2
解释：
只需要两步操作（每步操作指南使一个元素加 1 或减 1）：
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
```

**示例 2**

```
输入：nums = [1,10,2,9]
输出：16
```

提示：

- n == nums.length
- 1 <= nums.length <= 105
- -109 <= nums[i] <= 109

## 解答

```typescript
/**
 * 暴力求解
 * @desc 时间复杂度 O(n ^ 2) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function minMoves(nums: number[]): number {
  const n = nums.length;
  if (n === 1) {
    return 0;
  }
  let ans = Infinity;

  for (let i = 0; i < n; i++) {
    const base = nums[i];
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += Math.abs(nums[j] - base);
    }

    ans = Math.min(ans, sum);
  }

  return ans;
}

/**
 * 排序
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @returns {number}
 */
export function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let ans = 0;
  let x = nums[Math.floor(n / 2)];
  for (let i = 0; i < n; i++) {
    ans += Math.abs(nums[i] - x);
  }
  return ans;
}
```
