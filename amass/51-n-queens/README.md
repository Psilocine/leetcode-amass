# 51. N 皇后

> 难度：困难
>
> https://leetcode.cn/problems/n-queens/

## 题目

按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

**n 皇后问题** 研究的是如何将 `n` 个皇后放置在 `n×n` 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 `n` ，返回所有不同的  **n 皇后问题** 的解决方案。

每一种解法包含一个不同的  **n 皇后问题** 的棋子放置方案，该方案中 `'Q'` 和 `'.'` 分别代表了皇后和空位。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/170928826-a929d039-c114-486f-9c5c-a89d4f848af3.png)

```
输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。
```

**示例 2**

```
输入：n = 1
输出：[["Q"]]
```

提示：

- 1 <= n <= 9

## 解答

```typescript
/**
 * 回溯 dfs
 * @desc 时间复杂度 O(n!) 空间复杂度 O(n)
 * @param n {number}
 * @returns {string[][]}
 */
export function solveNQueens(n: number): string[][] {
  const ans: string[][] = [];
  const board: string[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill("."));

  const backtrack = (row: number) => {
    if (row === board.length) {
      ans.push(board.map((row) => row.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue;
      }

      board[row][col] = "Q";
      backtrack(row + 1);
      board[row][col] = ".";
    }
  };
  backtrack(0);

  return ans;
}

/**
 * 为什么只判断上方、右上、左上？因为下方还没放置 Q，且同行只会放一个 Q
 */
function isValid(board: string[][], row: number, col: number): boolean {
  const n = board.length;
  // 同列上方
  for (let i = 0; i < row; i++) {
    if (board[i][col] === "Q") {
      return false;
    }
  }
  // 右上方
  for (let i = row - 1, j = col + 1; i >= 0 && j <= n; i--, j++) {
    if (board[i][j] === "Q") {
      return false;
    }
  }

  // 左上方
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") {
      return false;
    }
  }

  return true;
}
```
