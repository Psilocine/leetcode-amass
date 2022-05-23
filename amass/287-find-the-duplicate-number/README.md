# 287. 寻找重复数

> 难度：中等
>
> https://leetcode.cn/problems/find-the-duplicate-number/

## 题目

给定一个包含  `n + 1` 个整数的数组 `nums` ，其数字都在 `[1, n]` 范围内（包括 `1` 和 `n`），可知至少存在一个重复的整数。

假设 `nums` 只有 **一个重复的整数** ，返回 **这个重复的数** 。

你设计的解决方案必须 **不修改** 数组 `nums` 且只用常量级 `O(1)` 的额外空间。

**示例 1**

```
输入：nums = [1,3,4,2,2]
输出：2
```

**示例 2**

```
输入：nums = [3,1,3,4,2]
输出：3
```

提示：

- 1 <= n <= 105
- nums.length == n + 1
- 1 <= nums[i] <= n
- nums 中 只有一个整数 出现 两次或多次 ，其余整数均只出现 一次

进阶：

- 如何证明 nums 中至少存在一个重复的数字?
- 你可以设计一个线性级时间复杂度 O(n) 的解决方案吗？

## 解答

```typescript
/**
 * 暴力破解
 * @desc 时间复杂度 O(n ^ 2) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function findDuplicate(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) {
        return nums[i];
      }
    }
  }
}

/**
 * 二分搜索
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function findDuplicate2(nums: number[]): number {
  const n = nums.length;
  let left = 1;
  let right = n - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);

    let cnt = 0;
    for (const num of nums) {
      if (num <= mid) {
        cnt += 1;
      }
    }

    // 根据抽屉原理，小于等于 4 的个数如果严格大于 4 个，此时重复元素一定出现在 [1..4] 区间里
    if (cnt > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

/**
 * 快慢指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function findDuplicate3(nums: number[]): number {
  let slow = 0,
    fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = 0;
  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
```
