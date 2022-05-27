# 238. 除自身以外数组的乘积

> 难度：中等
>
> https://leetcode.cn/problems/product-of-array-except-self/

## 题目

给你一个整数数组 `nums`，返回 数组 `answer`，其中 `answer[i]` 等于 `nums` 中除 `nums[i]` 之外其余各元素的乘积。

题目数据 **保证** 数组 `nums` 之中任意元素的全部前缀元素和后缀的乘积都在 **32 位** 整数范围内。

**请不要使用除法**，且在 `O(n)` 时间复杂度内完成此题。

**示例 1**

```
输入: nums = [1,2,3,4]
输出: [24,12,8,6]
```

**示例 2**

```
输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
```

提示：

- 2 <= nums.length <= 105
- -30 <= nums[i] <= 30
- 保证 数组  nums 之中任意元素的全部前缀元素和后缀的乘积都在 `32 位` 整数范围内

进阶：你可以在 `O(1)` 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）

## 解答

```typescript
/**
 * 左右前缀乘积
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array(n);
  const preLeft = new Array(n);
  const preRight = new Array(n);

  // 右侧乘积的第一个数是 1，因为它左边没有值
  preRight[0] = 1;
  for (let i = 1; i < n; i++) {
    preRight[i] = nums[i - 1] * preRight[i - 1];
  }
  // 左侧乘积的最后一个数是 1，因为它右边没有值
  preLeft[n - 1] = 1;
  for (let i = n - 2; i >= 0; --i) {
    preLeft[i] = nums[i + 1] * preLeft[i + 1];
  }

  for (let i = 0; i < n; i++) {
    ans[i] = preLeft[i] * preRight[i];
  }

  return ans;
}

/**
 * 左右前缀乘积，优化
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function productExceptSelf2(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array(n); // 输出数组不视为额外空间

  ans[0] = 1;
  for (let i = 1; i < n; i++) {
    ans[i] = nums[i - 1] * ans[i - 1];
  }

  let R = 1;
  for (let i = n - 1; i >= 0; --i) {
    ans[i] = ans[i] * R;
    R *= nums[i];
  }

  return ans;
}
```
