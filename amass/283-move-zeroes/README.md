# 283. 移动零

> 难度：简单
>
> https://leetcode-cn.com/problems/move-zeroes/

## 题目

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**请注意** ，必须在不复制数组的情况下原地对数组进行操作。


示例 1:

```
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
```

示例 2:

```
输入: nums = [0]
输出: [0]
```

**进阶：**

你能尽量减少完成的操作次数吗？

## 解答

```typescript
/**
 * 双指针
 * left 左边均为非零数
 * right 遍历出非零数，与左指针的索引交换
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @return {void} - 题目不能有返回值，本意是不能创建新数组求解，这里为了测试返回
 */
export function moveZeroes(nums: number[]): number[] {
  const n = nums.length;
  let left = 0,
    right = 0;

  while (right < n) {
    // 非零数
    if (nums[right]) {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      left++; // 位置被非零数交换，索引++
    }
    right++;
  }

  return nums;
};
```