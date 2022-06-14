# 59. 螺旋矩阵 II

> 难度：中等
>
> https://leetcode.cn/problems/spiral-matrix-ii/

## 题目

给你一个正整数  n ，生成一个包含 1 到  n2  所有元素，且元素按顺时针顺序螺旋排列的  n x n 正方形矩阵 matrix 。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/173475969-2efef942-2923-4257-8e91-70d5b9f89c01.png)

```
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
```

**示例 2**

```
输入：n = 1
输出：[[1]]
```

提示：

- 1 <= n <= 20

## 解答

```typescript
/**
 * 按外层模拟
 * @desc 时间复杂度 O(n ^ 2) 空间复杂度 O(1)
 * @param n {number}
 * @returns {number[][]}
 */
export function generateMatrix(n: number): number[][] {
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;

  let val: number = 1;
  const ans: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (top < bottom && left < right) {
    // top
    for (let i = left; i < right; i++) ans[top][i] = val++;
    // right
    for (let i = top; i < bottom; i++) ans[i][right] = val++;
    // bottom
    for (let i = right; i > left; i--) ans[bottom][i] = val++;
    // left
    for (let i = bottom; i > top; i--) ans[i][left] = val++;

    top++;
    right--;
    bottom--;
    left++;
  }

  if (top === bottom) {
    // 只剩一行
    for (let i = left; i <= right; i++) ans[top][i] = val++;
  } else if (left === right) {
    // 只剩一列
    for (let i = top; i <= bottom; i++) ans[i][right] = val++;
  }

  return ans;
}
```
