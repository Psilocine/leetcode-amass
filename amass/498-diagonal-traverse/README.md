# 498. 对角线遍历

> 难度：中等
>
> https://leetcode.cn/problems/diagonal-traverse/

## 题目

给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/173478625-2c607972-3f37-4fc2-b94a-e82647b05700.png)

```
输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,4,7,5,3,6,8,9]
```

**示例 2**

```
输入：mat = [[1,2],[3,4]]
输出：[1,2,3,4]
```

## 解答

```typescript
/**
 * 模拟
 * 对角线共 m + n - 1 条，奇数斜上遍历 偶数斜下遍历
 * @desc 时间复杂度 O(mn) 空间复杂度 O(1)
 * @param mat {number[][]}
 * @returns {number[]}
 */
export function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  if (m === 1) {
    return mat[0];
  }
  const n = mat[0].length;
  const ans: number[] = new Array(m * n).fill(0);
  let pos = 0;
  for (let i = 0; i < m + n - 1; i++) {
    // 奇数
    if (i % 2 === 1) {
      let x = i < n ? 0 : i - n + 1;
      let y = i < n ? i : n - 1;
      while (x < m && y >= 0) {
        ans[pos] = mat[x][y];
        pos++;
        x++;
        y--;
      }
    } else {
      // 偶数
      let x = i < m ? i : m - 1;
      let y = i < m ? 0 : i - m + 1;
      while (x >= 0 && y < n) {
        ans[pos] = mat[x][y];
        pos++;
        x--;
        y++;
      }
    }
  }

  return ans;
}
```
