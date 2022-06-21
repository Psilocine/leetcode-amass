# 118. 杨辉三角

> 难度：简单
>
> https://leetcode.cn/problems/pascals-triangle/

## 题目

给定一个非负整数  numRows，生成「杨辉三角」的前  numRows  行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

![image](https://pic.leetcode-cn.com/1626927345-DZmfxB-PascalTriangleAnimated2.gif)

**示例 1**

```
输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

**示例  2**

```
输入: numRows = 1
输出: [[1]]
```

提示:

- 1 <= numRows <= 30

## 解答

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(numRows ^ 2)空间复杂度 O(1)
 * @param numRows {number}
 * @returns {number[][]}
 */
export function generate(numRows: number): number[][] {
  if (numRows === 1) {
    return [[1]];
  } else if (numRows === 2) {
    return [[1], [1, 1]];
  }

  // 由于下一行需要依赖上一行，把所有的值都先赋值为 1
  const ans: number[][] = new Array(numRows)
    .fill(0)
    .map((_, i) => new Array(i + 1).fill(1));

  for (let i = 2; i < numRows; i++) {
    const len = ans[i].length;

    // 头尾为 1，无需参与
    for (let j = 1; j < len - 1; j++) {
      ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
  }

  return ans;
}
```
