# 217. 存在重复元素

> 难度：简单
>
> https://leetcode.cn/problems/contains-duplicate/

## 题目

给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。

**示例 1**

```
输入：nums = [1,2,3,1]
输出：true
```

**示例 2**

```
输入：nums = [1,2,3,4]
输出：false
```

**示例  3**

```
输入：nums = [1,1,1,3,3,4,3,2,4,2]
输出：true
```

## 解答

```typescript
/**
 * 排序 + 遍历
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @returns {boolean}
 */
export function containsDuplicate(nums: number[]): boolean {
  nums.sort((a, b) => a - b); // logn

  for (let i = 1; i < nums.length; i++) {
    // n
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }

  return false;
}

/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {boolean}
 */
export function containsDuplicate2(nums: number[]): boolean {
  const map: Set<number> = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }

    map.add(nums[i]);
  }

  return false;
}
```
