# 1413. 逐步求和得到正数的最小值

> 难度：简单
>
> https://leetcode.cn/problems/minimum-value-to-get-positive-step-by-step-sum/

## 题目

给你一个整数数组 nums 。你可以选定任意的   正数 startValue 作为初始值。

你需要从左到右遍历 nums  数组，并将 startValue 依次累加上  nums  数组中的值。

请你在确保累加和始终大于等于 1 的前提下，选出一个最小的   正数   作为 startValue 。

**示例 1**

```
输入：nums = [-3,2,-3,4,2]
输出：5
解释：如果你选择 startValue = 4，在第三次累加时，和小于 1 。
                累加求和
                startValue = 4 | startValue = 5 | nums
                  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
                  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
                  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
                  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
                  (4 +2 ) = 6  | (5 +2 ) = 7    |   2
```

**示例 2**

```
输入：nums = [1,2]
输出：1
解释：最小的 startValue 需要是正数。
```

**示例 3**

```
输入：nums = [1,-2,-3]
输出：5
```

## 解答

```typescript
/**
 * 前缀表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function minStartValue(nums: number[]): number {
  // 前缀和哈希表
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  const min = Math.min(...prefix);

  return Math.abs(min - 1);
}
/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function minStartValue2(nums: number[]): number {
  // 简单模拟
  const n = nums.length;
  let sum = 0,
    min = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    min = Math.min(sum, min);
  }

  return -min + 1;
}
```
