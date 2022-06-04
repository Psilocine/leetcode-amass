# 977. 有序数组的平方

> 难度：简单
>
> https://leetcode.cn/problems/squares-of-a-sorted-array/

## 题目

给你一个按 **非递减顺序** 排序的整数数组 `nums` ，返回 **每个数字的平方** 组成的新数组，要求也按 **非递减顺序** 排序。

**示例 1**

```
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```

**示例 2**

```
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

提示：

- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums 已按 非递减顺序 排序

进阶：

- 请你设计时间复杂度为 O(n) 的算法解决本问题

## 解答

```typescript
/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function sortedSquares(nums: number[]): number[] {
  let k = nums.length - 1;
  let left = 0;
  let right = k;
  const ans: number[] = new Array(k + 1);

  while (left <= right) {
    const leftPow = Math.pow(nums[left], 2);
    const rightPow = Math.pow(nums[right], 2);
    if (leftPow > rightPow) {
      ans[k--] = leftPow;
      left++;
    } else {
      ans[k--] = rightPow;
      right--;
    }
  }

  return ans;
}
```
