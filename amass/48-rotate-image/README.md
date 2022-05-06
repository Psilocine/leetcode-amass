# 48. 旋转图像

> 难度：中等
>
> https://leetcode-cn.com/problems/rotate-image/

## 题目

给定一个 n × n 的二维矩阵 `matrix` 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 `原地` 旋转图像，这意味着你需要直接修改输入的二维矩阵。**请不要** 使用另一个矩阵来旋转图像。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/167137265-4b20fa1f-3920-4ced-96ad-11d55ef6a897.png)

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/167137261-c9533fbf-d0a0-4f61-8b41-effe99b896ec.png)

```
输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

**提示：**

- n == matrix.length == matrix[i].length
- 1 <= n <= 20
- -1000 <= matrix[i][j] <= 1000

## 解答

```typescript
/**
 * 题目要求在原来的矩阵上修改
 * 先根据斜边做对称反转
 * [1,2,3]    [1,4,7]
 * [4,5,6] -> [2,5,8]
 * [7,8,9]    [3,6,9]
 *
 * 再每一行 reverse
 * [1,4,7]    [7,4,1]
 * [2,5,8] -> [8,5,2]
 * [3,6,9]    [9,6,3]
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(1)
 * @param matrix {number[][]}
 * @returns {void}
 */
export function rotate(matrix: number[][]): number[][] {
  // 先根据斜边做对称反转
  let len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 再每一行 reverse
  matrix.forEach((v) => v.reverse());

  return matrix;
}
```
