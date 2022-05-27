# 560. 和为 K 的子数组

> 难度：中等
>
> https://leetcode.cn/problems/subarray-sum-equals-k/

## 题目

给你一个整数数组 `nums` 和一个整数 `k` ，请你统计并返回 **该数组中和为  k** 的连续子数组的个数。

**示例 1**

```
输入：nums = [1,1,1], k = 2
输出：2
```

**示例 2**

```
输入：nums = [1,2,3], k = 3
输出：2
```

提示：

- 1 <= nums.length <= 2 \* 104
- -1000 <= nums[i] <= 1000
- -107 <= k <= 107

## 解答

```typescript
/**
 * 前缀和 + 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @param k {number[]}
 * @returns {number}
 */
export function subarraySum(nums: number[], k: number): number {
  const map: Map<number, number> = new Map();
  map.set(0, 1);
  let ans: number = 0,
    pre: number = 0;

  for (let num of nums) {
    pre += num;

    if (map.has(pre - k)) {
      ans += map.get(pre - k);
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1);
    }
  }

  return ans;
}
```
