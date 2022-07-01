# 349. 两个数组的交集

> 难度：简单
>
> https://leetcode.cn/problems/intersection-of-two-arrays/

## 题目

给定两个数组  nums1  和  nums2 ，返回 它们的交集  。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

**示例 1**

```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
```

**示例 2**

```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
```

## 解答

```typescript
/**
 * 哈希表 set
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums1 {number[]}
 * @param nums2 {number[]}
 * @returns {number[]}
 */
export function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (!set.has(nums1[i])) {
      set.add(nums1[i]);
    }
  }

  const ans: number[] = [];
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i]) && !ans.includes(nums2[i])) {
      ans.push(nums2[i]);
    }
  }

  return ans;
}
```
