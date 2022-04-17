# 169. 多数元素

> 难度：简单
>
> https://leetcode-cn.com/problems/majority-element/

## 题目

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 **大于** `⌊ n/2 ⌋` 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

**示例 1**

```
输入：[3,2,3]
输出：3
```

**示例 2**

```
输入：[2,2,1,1,1,2,2]
输出：2
```

**进阶：**

尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

## 解答

```typescript
/**
 * 哈希表
 *
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @return {number}
 */
export function majorityElement(nums: number[]): number {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const item = map.get(nums[i]) || 0;

    if (item >= Math.floor(nums.length / 2)) {
      return nums[i];
    } else {
      map.set(nums[i], item ? item + 1 : 1);
    }
  }
}

/**
 * 排序
 * 先单调递增排序， n/2 下标的元素一定是众数
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @return {number}
 */
export function majorityElement2(nums: number[]): number {
  nums = nums.sort();

  return nums[Math.floor(nums.length / 2)];
}
```