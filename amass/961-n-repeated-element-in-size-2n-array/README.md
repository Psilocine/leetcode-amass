# 961. 在长度 2N 的数组中找出重复 N 次的元素

> 难度：简单
>
> https://leetcode.cn/problems/n-repeated-element-in-size-2n-array/

## 题目

给你一个整数数组 `nums` ，该数组具有以下属性：

- nums.length == 2 \* n.
- nums 包含 n + 1 个 不同的 元素
- nums 中恰有一个元素重复 n 次

找出并返回重复了 `n` 次的那个元素。

**示例 1**

```
输入：nums = [1,2,3,3]
输出：3
```

**示例 2**

```
输入：nums = [2,1,2,5,3,2]
输出：2
```

**示例 3**

```
输入：nums = [5,1,5,2,5,3,5,4]
输出：5
```

提示：

- 2 <= n <= 5000
- nums.length == 2 \* n
- 0 <= nums[i] <= 104
- nums 由 n + 1 个 不同的 元素组成，且其中一个元素恰好重复 n 次

## 解答

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function repeatedNTimes(nums: number[]): number {
  const map = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      // const value = map.get(nums[i]);
      // if (n / 2 === value + 1) {
      //   return nums[i];
      // }
      // map.set(nums[i], value + 1);

      // 如果有多个重复则用上述代码，根据题意只有一个数值会重复
      return nums[i];
    } else {
      map.set(nums[i], 1);
    }
  }
}
```
