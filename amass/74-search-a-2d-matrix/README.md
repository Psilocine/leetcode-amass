# 74. 搜索二维矩阵

> 难度：中等
>
> https://leetcode.cn/problems/search-a-2d-matrix/

## 题目

编写一个高效的算法来判断  m x n  矩阵中，是否存在一个目标值。该矩阵具有如下特性：

- 每行中的整数从左到右按升序排列。
- 每行的第一个整数大于前一行的最后一个整数。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/174262900-9fb2d09d-484c-4c67-9e00-837943186a71.png)

```
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/174262904-93661dba-fa8a-4846-b66d-e3b558228591.png)

```
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false
```

## 解答

```typescript
/**
 * 二分查找
 * @desc 时间复杂度 O(lognm) 空间复杂度 O(1)
 * @param matrix {number[][]}
 * @param target {number}
 * @returns {boolean}
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  let l = 0,
    r = m - 1;
  // 确认在哪一行
  while (l <= r) {
    const c = l + Math.floor((r - l) / 2);
    if (matrix[c][0] === target) {
      return true;
    } else if (matrix[c][0] > target) {
      r = c - 1;
    } else {
      l = c + 1;
    }
  }
  // 超出矩阵范围
  if (r < 0 || r >= m) {
    return false;
  }
  const row = matrix[r];
  l = 0;
  r = n - 1;

  while (l <= r) {
    const c = l + Math.floor((r - l) / 2);
    if (row[c] === target) {
      return true;
    } else if (row[c] > target) {
      r = c - 1;
    } else {
      l = c + 1;
    }
  }

  return false;
}
```
