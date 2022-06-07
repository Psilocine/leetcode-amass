# 300. 最长递增子序列

> 难度：中等
>
> https://leetcode.cn/problems/longest-increasing-subsequence/

## 题目

给你一个整数数组 `nums` ，找到其中最长严格递增子序列的长度。

**子序列** 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，`[3,6,2,7]` 是数组 `[0,3,1,6,2,2,7]` 的子序列。

**示例 1**

```
输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
```

**示例 2**

```
输入：nums = [0,1,0,3,2,3]
输出：4
```

**示例 3**

```
输入：nums = [7,7,7,7,7,7,7]
输出：1
```

提示：

- 1 <= nums.length <= 2500
- -10^4 <= nums[i] <= 10^4

进阶：

- 你能将算法的时间复杂度降低到  O(n log(n)) 吗?

## 解答

```typescript
/**
 * 动态规划
 * dp[i] = max(dp[j] + 1)
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  // 每个元素都是长度为 1 的递增子序列
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  return Math.max(...dp);
}
/**
 * 贪心 + 二分查找
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function lengthOfLIS2(nums: number[]): number {
  // 每堆的堆顶
  const top = [];
  // 牌堆数初始化为 0
  let piles = 0;

  for (let i = 0; i < nums.length; i++) {
    // 要处理的扑克牌
    let poker = nums[i];
    // 左堆和最右堆进行二分查找，因为堆顶是有序排的，最终找到该牌哟插入的堆
    let left = 0,
      right = piles;

    // 搜索区间左闭右开
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (top[mid] > poker) {
        right = mid;
      } else if (top[mid] < poker) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // 没找到合适的牌堆，新建一堆
    if (left === piles) piles++;

    // 把这张牌放到堆顶
    top[left] = poker;
  }

  return piles;
}
```
