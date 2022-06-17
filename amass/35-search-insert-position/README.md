# 35. 搜索插入位置

> 难度：简单
>
> https://leetcode.cn/problems/search-insert-position/

## 题目

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

**示例 1**

```
输入: nums = [1,3,5,6], target = 5
输出: 2
```

**示例  2**

```
输入: nums = [1,3,5,6], target = 2
输出: 1
```

**示例 3**

```
输入: nums = [1,3,5,6], target = 7
输出: 4
```

## 解答

```typescript
/**
 * 二分查找
 * @desc 时间复杂度 O(logn) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number}
 */
export function searchInsert(nums: number[], target: number): number {
  const n = nums.length;
  let l = 0,
    r = n - 1;

  // 找到 >= target 的位置
  while (l <= r) {
    const c = l + Math.floor((r - l) / 2);
    if (nums[c] < target) {
      l = c + 1;
    } else {
      r = c - 1;
    }
  }

  return l;
}
```
