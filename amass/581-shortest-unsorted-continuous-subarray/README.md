# 581. 最短无序连续子数组

> 难度：中等
>
> https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/

## 题目

给你一个整数数组 `nums` ，你需要找出一个 **连续子数组** ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

请你找出符合题意的 **最短** 子数组，并输出它的长度。

**示例 1**

```
输入：nums = [2,6,4,8,10,9,15]
输出：5
解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
```

**示例 2**

```
输入：nums = [1,2,3,4]
输出：0
```

**示例 3**

```
输入：nums = [1]
输出：0
```

提示：

- 1 <= nums.length <= 104
- -105 <= nums[i] <= 105

进阶：你可以设计一个时间复杂度为 O(n) 的解决方案吗？

## 解答

```typescript
/**
 * 排序
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function findUnsortedSubarray(nums: number[]): number {
  // 排序升序的情况
  if (isSorted(nums)) {
    return 0;
  }
  const n = nums.length;
  const arr = [...nums].sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;
  while (nums[left] === arr[left]) {
    left++;
  }

  while (nums[right] === arr[right]) {
    right--;
  }

  return right - left + 1;
}

function isSorted(nums: number[]): boolean {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function findUnsortedSubarray2(nums: number[]): number {
  const n = nums.length;
  if (n === 1) {
    return 0;
  }
  let begin = -1;
  let end = -1;
  let min = nums[n - 1];
  let max = nums[0];
  for (let i = 0; i < n; i++) {
    if (nums[i] < max) {
      end = i;
    } else {
      max = nums[i];
    }

    if (nums[n - i - 1] > min) {
      begin = n - i - 1;
    } else {
      min = nums[n - i - 1];
    }
  }

  return end === -1 ? 0 : end - begin + 1;
}
```
