# 1. 两数之和

> 难度：简单
>
> https://leetcode-cn.com/problems/two-sum/

## 题目

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** `target` 的那 **两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**示例 1**

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

**示例 2**

```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

**示例 3**
```
输入：nums = [3,3], target = 6
输出：[0,1]
```

## 解法
```typescript
/**
 * 暴力破解
 * 
 * @desc 时间复杂度：O(n^2)，空间复杂度：O(1)
 * @param nums {Array<number>}
 * @param target {number}
 * @return {Array<number>}
 */
export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j: number = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

/**
 * 哈希表
 * 
 * @desc 时间复杂度：O(n)，空间复杂度：O(n)
 * @param nums {Array<number>}
 * @param target {number}
 * @return {Array<number>}
 */
export function twoSum2(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (map.has(target - item)) {
      return [map.get(target - item), i];
    } else {
      map.set(item, i);
    }
  }

  return [];
}
```