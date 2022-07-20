# 454. 四数相加 II

> 难度：中等
>
> https://leetcode.cn/problems/4sum-ii/

## 题目

给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：

- 0 <= i, j, k, l < n
- nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

**示例 1**

```
输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出：2
解释：
两个元组如下：
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
```

**示例 2**

```
输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
输出：1
```

提示：

- n == nums1.length
- n == nums2.length
- n == nums3.length
- n == nums4.length
- 1 <= n <= 200
- -228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228

## 解答

```typescript
/**
 * 哈希表
 * 分组 AB一组 CD一组，时间复杂度最优
 * @desc 时间复杂度 O(n ^ 2) 空间复杂度 O(n ^ 2)
 * @param nums1 {number[]}
 * @param nums2 {number[]}
 * @param nums3 {number[]}
 * @param nums4 {number[]}
 * @returns {number}
 */
export function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const map: Map<number, number> = new Map();
  let count: number = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      map.set(sum, (map.get(sum) || 0) + 1);
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = nums3[i] + nums4[j];
      if (map.has(-sum)) {
        count += map.get(-sum);
      }
    }
  }

  return count;
}
```
