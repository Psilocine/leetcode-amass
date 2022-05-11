# 128. 最长连续序列

> 难度：中等
>
> https://leetcode.cn/problems/longest-consecutive-sequence/

## 题目

给定一个未排序的整数数组 `nums` ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为  `O(n)` 的算法解决此问题。

**示例 1**

```
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
```

**示例 2**

```
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
```

## 解答

```typescript
/**
 * 去重 + 排序
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;

  nums = [...new Set(nums)];
  nums.sort((a, b) => a - b);

  let max = 1;
  let i = 1;

  while (i < nums.length) {
    let _max = 1;
    while (nums[i] === nums[i - 1] + 1) {
      _max++;
      i++;
    }
    i++;
    max = Math.max(max, _max);
  }

  return max;
}
```
