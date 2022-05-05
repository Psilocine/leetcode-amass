# 34. 在排序数组中查找元素的第一个和最后一个位置

> 难度：中等
>
> https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/

## 题目

给定一个按照升序排列的整数数组 `nums`，和一个目标值 `target`。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 `target`，返回 `[-1, -1]`。

**进阶：**

你可以设计并实现时间复杂度为 `O(log n)` 的算法解决此问题吗？

**示例 1**

```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

**示例 2**

```
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```

**示例 3**

```
输入：nums = [], target = 0
输出：[-1,-1]
```

**提示：**

- 0 <= nums.length <= 105
- -109 <= nums[i] <= 109
- nums 是一个非递减数组
- -109 <= target <= 109

## 解答

```typescript
/**
 * 暴力破解法
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number[]}
 */
export function searchRange(nums: number[], target: number): number[] {
  let len = nums.length;
  if (len < 1) return [-1, -1];
  if (len === 1) {
    return nums[0] === target ? [0, 0] : [-1, -1];
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] === target) {
      let j = i;
      while (nums[j + 1] === nums[i]) {
        j += 1;
      }
      return [i, j];
    }
  }

  return [-1, -1];
}

/**
 * 二分法
 * @desc 时间复杂度 O(logn) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number[]}
 */
export function searchRange2(nums: number[], target: number): number[] {
  let ans = [-1, -1];

  const leftIdx = binarySearchLeft(nums, target);
  const rightIdx = binarySearchRight(nums, target);

  if (
    leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) {
    ans = [leftIdx, rightIdx];
  }

  return ans;
}

function binarySearchLeft(nums, target): number {
  let left = -1;
  let right = nums.length;

  while (left + 1 !== right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
}
function binarySearchRight(nums, target): number {
  let left = -1;
  let right = nums.length;
  while (left + 1 !== right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return left;
}
```
