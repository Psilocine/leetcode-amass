# 221. 最大正方形

> 难度：中等
>
> https://leetcode.cn/problems/maximal-square/

## 题目

在一个由 `'0'` 和 `'1'` 组成的二维矩阵内，找到只包含 `'1'` 的最大正方形，并返回其面积。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/168481851-6708b775-5e33-4386-adc1-b7619b5d582d.png)

```
输入：matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
输出：4
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/168481854-2c81e174-f396-4a79-8eda-41f7bfadaafc.png)

```
输入：matrix = [["0","1"],["1","0"]]
输出：1
```

**示例 3**

```
输入：matrix = [["0"]]
输出：0
```

提示：

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 300
- matrix[i][j] 为 '0' 或 '1'

## 解答

```typescript
/**
 * 动态规划
 * dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
 * @desc 时间复杂度 O(mn) 空间复杂度 O(mn) mn 为行数列数
 * @param matrix {string[][]}
 * @returns {number}
 */
export function maximalSquare(matrix: string[][]): number {
  const row = matrix.length;
  const col = matrix[0].length;
  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0));

  let maxLen = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === "0") continue;

      dp[i][j] =
        Math.min(
          dp[i - 1]?.[j] || 0,
          dp[i - 1]?.[j - 1] || 0,
          dp[i][j - 1] || 0
        ) + 1;

      maxLen = Math.max(maxLen, dp[i][j]);
    }
  }

  return maxLen ** 2;
}
```
