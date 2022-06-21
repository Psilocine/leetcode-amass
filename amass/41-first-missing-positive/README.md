# 41. 缺失的第一个正数

> 难度：困难
>
> https://leetcode.cn/problems/first-missing-positive/

## 题目

给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。

请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

**示例 1**

```
输入：nums = [1,2,0]
输出：3
```

**示例 2**

```
输入：nums = [3,4,-1,1]
输出：2
```

**示例 3**

```
输入：nums = [7,8,9,11,12]
输出：1
```

提示：

- 1 <= nums.length <= 5 \* 10^5
- -2^31 <= nums[i] <= 2^31 - 1

## 解答

```typescript
/**
 * 哈希表 不符合题意
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function firstMissingPositive(nums: number[]): number {
  let ans: number = 1;
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
    while (set.has(ans)) {
      ++ans;
    }
  }

  return ans;
}

/**
 * 原地哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function firstMissingPositive2(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}
```
