# 75. 颜色分类

> 难度：中等
>
> https://leetcode-cn.com/problems/sort-colors/

## 题目

给定一个包含红色、白色和蓝色、共 `n` 个元素的数组 `nums` ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 `0`、 `1` 和 `2` 分别表示红色、白色和蓝色。

必须在不使用库的 sort 函数的情况下解决这个问题。

**示例 1：**

```
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
```

**示例 2：**

```
输入：nums = [2,0,1]
输出：[0,1,2]
```

**提示：**

```
n == nums.length
1 <= n <= 300
nums[i] 为 0、1 或 2
```

**进阶：**

- 你可以不使用代码库中的排序函数来解决这道题吗？
- 你能想出一个仅使用常数空间的一趟扫描算法吗？

## 解答

```typescript
/**
 * 单指针
 * 两次遍历
 * 第一次把所有的 0 交换到头部
 * 第二次从当前头部的索引开始，把所有的 1 交换到头部
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function sortColors(nums: number[]): number[] {
  let point = 0;
  let n = nums.length;
  let temp;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      temp = nums[i];
      nums[i] = nums[point];
      nums[point] = temp;
      point++;
    }
  }

  for (let i = point; i < n; i++) {
    if (nums[i] === 1) {
      temp = nums[i];
      nums[i] = nums[point];
      nums[point] = temp;
      point++;
    }
  }

  return nums;
}

/**
 * 双指针
 * 一次遍历
 * p0 从头部开始 记录 0
 * p1 从头部开始 记录 1
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function sortColors2(nums: number[]): number[] {
  let p0 = 0;
  let p1 = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[p1]] = [nums[p1], nums[i]];
      p1++;
    } else if (nums[i] === 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]];
      if (p0 < p1) {
        [nums[i], nums[p1]] = [nums[p1], nums[i]];
      }
      p0++;
      p1++;
    }
  }

  return nums;
}

/**
 * 双指针
 * 一次遍历
 * p0 从头部开始 记录 0
 * p2 从尾部开始 记录 2
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function sortColors3(nums: number[]): number[] {
  let p0 = 0;
  let p2 = nums.length - 1;
  for (let i = 0; i <= p2; i++) {
    while (i <= p2 && nums[i] === 2) {
      [nums[i], nums[p2]] = [nums[p2], nums[i]];
      p2--;
    }
    if (nums[i] === 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]];
      p0++;
    }
  }

  return nums;
}
```
