# 209. 长度最小的子数组

> 难度：中等
>
> https://leetcode.cn/problems/minimum-size-subarray-sum/

## 题目

给定一个含有  n  个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组  [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

**示例 1**

```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

**示例 2**

```
输入：target = 4, nums = [1,4,4]
输出：1
```

**示例 3**

```
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0
```

提示：

- 1 <= target <= 10^9
- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^5

进阶：

- 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。

## 解答

```typescript
/**
 * 前缀和 + 二分查找
 * 前缀和是递增的，保证了二分的正确性
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param target {number}
 * @param nums {number[]}
 * @returns {number}
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  const sums: number[] = new Array(n + 1).fill(0);
  let ans: number = Infinity;
  for (let i = 0; i < n; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }

  for (let i = 0; i <= n; i++) {
    let ret = target + sums[i];
    let bound = binarySearch(sums, ret);
    if (bound < 0) {
      break;
    }
    if (bound <= n) {
      ans = Math.min(ans, bound - i);
    }
  }

  return ans === Infinity ? 0 : ans;
}

function binarySearch(nums: number[], target: number) {
  let left = -1,
    right = nums.length;
  while (left + 1 !== right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right === nums.length ? -1 : right;
}
/**
 * 滑动窗口
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param target {number}
 * @param nums {number[]}
 * @returns {number}
 */
export function minSubArrayLen2(target: number, nums: number[]): number {
  let i: number = 0; // 起始位置
  let sum: number = 0;
  let ans: number = Infinity;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= target) {
      const subL = j - i + 1;
      ans = Math.min(ans, subL);
      sum -= nums[i];
      i++;
    }
  }

  return ans === Infinity ? 0 : ans;
}
```
