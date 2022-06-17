# 54. 螺旋矩阵

> 难度：中等
>
> https://leetcode.cn/problems/spiral-matrix/

## 题目

给你一个 m 行 n 列的矩阵  matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/173475071-d7333717-0c9f-401e-9166-d2b569a74429.png)

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/173475073-d6cd0dd7-3eb5-4946-8972-dcd6959fea9b.png)

```
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

## 解答

```typescript
/**
 * 按外层模拟
 * @desc 时间复杂度 O(mn) 空间复杂度 O(1)
 * @param matrix {number[][]}
 * @returns {number[]}
 */
export function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  if (m === 0) {
    return [];
  }
  const n = matrix[0].length;
  const ans: number[] = new Array(m * n).fill(0);
  let idx: number = 0;

  let left = 0,
    right = n - 1,
    top = 0,
    bottom = m - 1;

  while (top < bottom && left < right) {
    // top
    for (let i = left; i < right; i++) ans[idx++] = matrix[top][i];
    // right
    for (let i = top; i < bottom; i++) ans[idx++] = matrix[i][right];
    // bottom
    for (let i = right; i > left; i--) ans[idx++] = matrix[bottom][i];
    // left
    for (let i = bottom; i > top; i--) ans[idx++] = matrix[i][left];

    top++;
    right--;
    bottom--;
    left++;
  }

  if (top === bottom) {
    // 只剩一行
    for (let i = left; i <= right; i++) ans[idx++] = matrix[top][i];
  } else if (left === right) {
    // 只剩一列
    for (let i = top; i <= bottom; i++) ans[idx++] = matrix[i][right];
  }

  return ans;
}
```
