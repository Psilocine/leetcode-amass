# 81. 搜索旋转排序数组 II

> 难度：中等
>
> https://leetcode.cn/problems/search-in-rotated-sorted-array-ii/

## 题目

已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。

给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。

你必须尽可能减少整个操作步骤。

**示例  1**

```
输入：nums = [2,5,6,0,0,1,2], target = 0
输出：true
```

**示例  2**

```
输入：nums = [2,5,6,0,0,1,2], target = 3
输出：false
```

## 解答

```typescript
/**
 * 二分查找
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {boolean}
 */
export function search(nums: number[], target: number): boolean {
  const n = nums.length;

  let l = 0,
    r = n - 1;

  while (l <= r) {
    const c = l + Math.floor((r - l) / 2);
    if (nums[c] === target) {
      return true;
    }
    if (nums[l] === nums[c] && nums[r] === nums[c]) {
      l++;
      r--;
    } else if (nums[l] <= nums[c]) {
      // [l, c] 升序
      if (nums[l] <= target && target < nums[c]) {
        r = c - 1;
      } else {
        l = c + 1;
      }
    } else {
      // [c, r] 升序
      if (nums[c] < target && target <= nums[n - 1]) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
  }
  return false;
}
```
