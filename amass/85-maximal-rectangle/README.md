# 85. 最大矩形

> 难度：困难
>
> https://leetcode.cn/problems/maximal-rectangle/

## 题目

给定一个仅包含  0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/173034873-b5548054-4f83-46c5-930b-9c9dbd688ea1.png)

```
输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：6
解释：最大矩形如上图所示。
```

**示例 2**

```
输入：matrix = []
输出：0
```

**示例 3**

```
输入：matrix = [["0"]]
输出：0
```

**示例 4**

```
输入：matrix = [["1"]]
输出：1
```

**示例 5**

```
输入：matrix = [["0","0"]]
输出：0
```

## 解答

```typescript
import { largestRectangleArea } from "../84-largest-rectangle-in-histogram";

/**
 * 单调栈
 * @desc 时间复杂度 O(mn) 空间复杂度 O(mn)
 * @param matrix {string[][]}
 * @returns {number}
 */
export function maximalRectangle(matrix: string[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }
  let heights = new Array(matrix[0].length).fill(0);
  let maxArea = 0;
  for (const row of matrix) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === "0") {
        heights[i] = 0;
      } else {
        heights[i]++;
      }
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
}
```
