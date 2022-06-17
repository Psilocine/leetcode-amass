# 33. 搜索旋转排序数组

> 难度：中等
>
> https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

## 题目

整数数组 `nums` 按升序排列，数组中的值 **互不相同**。

在传递给函数之前，`nums` 在预先未知的某个下标 `k(0 <= k < nums.length)` 上进行了 **旋转**，使数组变为 `[nums[k], nums[k + 1], ..., nums[n - 1], nums[0], nums[1], ..., nums[k - 1]]` (下标 **从 0 开始** 计数)。例如, `[0, 1, 2, 4, 5, 6, 7]` 在下标 `3` 处经旋转后可能变为 `[4, 5, 6, 7, 0, 1, 2]`。

给你 **旋转后** 的数组 `nums` 和一个整数 `target` ，如果 `nums` 中存在这个目标值 `target` ，则返回它的下标，否则返回 `-1`

**示例 1**

```
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
```

**示例 2**

```
输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
```

**示例 3**

```
输入：nums = [1], target = 0
输出：-1
```

**提示：**

- 1 <= nums.length <= 5000
- -10^4 <= nums[i] <= 10^4
- nums 中的每个值都 独一无二
- 题目数据保证 nums 在预先未知的某个下标上进行了旋转
- -10^4 <= target <= 10^4

**进阶：**

你可以设计一个时间复杂度为 O(log n) 的解决方案吗？

## 解答
```typescript
/**
 * 暴力破解法
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number}
 */
export function search(nums: number[], target: number): number {
  let res = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res = i;
      break;
    }
  }

  return res;
}

/**
 * 二分法
 * @desc 时间复杂度 O(logn) 空间复杂度 O(1)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number}
 */
export function search2(nums: number[], target: number): number {
  let len = nums.length;
  if (len === 0) {
    return -1;
  }
  if (len === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let l = 0,
    r = len - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    // [l, mid] 有序
    if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) {
        // target 在升序区间
        r = mid - 1;
      } else {
        l = mid + 1
      }
    } else {
      // [mid, r]
      if (nums[mid] < target && target <= nums[r]) {
        // target 在升序区间
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
}

```