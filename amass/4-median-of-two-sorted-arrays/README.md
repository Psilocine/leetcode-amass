# 4. 寻找两个正序数组的中位数

> 难度：困难
>
> https://leetcode.cn/problems/median-of-two-sorted-arrays/

## 题目

给定两个大小分别为 `m` 和 `n` 的正序（从小到大）数组 `nums1` 和 `nums2`。请你找出并返回这两个正序数组的 **中位数** 。

算法的时间复杂度应该为 `O(log (m+n))` 。

**示例 1**

```
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
```

**示例 2**

```
输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
```

提示：

- nums1.length == m
- nums2.length == n
- 0 <= m <= 1000
- 0 <= n <= 1000
- 1 <= m + n <= 2000
- -106 <= nums1[i], nums2[i] <= 106

## 解答

```typescript
/**
 * 划分数组
 * @desc 时间复杂度 O(log(min(m,n))) 空间复杂度 O(1)
 * @param nums1 {number[]}
 * @param nums2 {number[]}
 * @returns {number}
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;

  let left = 0;
  let right = m;
  // 前一部分的最大值 后一部分的最小值
  let median1 = 0,
    median2 = 0;

  while (left <= right) {
    let i = Math.floor((left + right) / 2);
    let j = Math.floor((m + n + 1) / 2) - i;

    const nums_im1 = i === 0 ? -Infinity : nums1[i - 1];
    const nums_i = i === m ? Infinity : nums1[i];

    const nums_jm1 = j === 0 ? -Infinity : nums2[j - 1];
    const nums_j = j === n ? Infinity : nums2[j];

    if (nums_im1 <= nums_j) {
      median1 = Math.max(nums_im1, nums_jm1);
      median2 = Math.min(nums_i, nums_j);
      left = i + 1;
    } else {
      right = i - 1;
    }
  }

  return (m + n) % 2 === 0 ? (median1 + median2) / 2 : median1;
}
```
