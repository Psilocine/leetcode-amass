# 37. 解数独

> 难度：困难
>
> https://leetcode.cn/problems/sudoku-solver/

## 题目

编写一个程序，通过填充空格来解决数独问题。

数独的解法需 **遵循如下规则：**

1. 数字  `1-9`  在每一行只能出现一次。
2. 数字  `1-9`  在每一列只能出现一次。
3. 数字  `1-9`  在每一个以粗实线分隔的  `3x3`  宫内只能出现一次。（请参考示例图）

数独部分空格内已填入了数字，空白格用  `'.'`  表示。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/170945385-0ea22201-5acb-414c-a8e6-9b6d7e5cb0e7.png)

```
输入：board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
输出：[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
解释：输入的数独如上图所示，唯一有效的解决方案如下所示：
```

提示：

- board.length == 9
- board[i].length == 9
- board[i][j] 是一位数字或者 '.'
- 题目数据 保证 输入数独仅有一个解

## 解答

```typescript
/**
 * 回溯 dfs
 * @desc 时间复杂度 O(9^(9*9)) 空间复杂度 O(1)
 * @param board {string[][]}
 * @returns {string[][]}
 */
export function solveSudoku(board: string[][]): string[][] {
  const backtrack = () => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        // 本来有值
        if (board[row][col] !== ".") continue;
        for (let val = 1; val <= 9; val++) {
          //尝试在当前单元格放置1-9
          if (isValid(board, row, col, `${val}`)) {
            //判断放置数字的合法性
            board[row][col] = val + ""; //放置数字
            if (backtrack()) {
              //合法返回ture
              return true;
            }

            board[row][col] = `.`; //不合法回溯状态
          }
        }
        return false; //1-9的数字都不合法，返回false
      }
    }
    return true;
  };

  backtrack();

  return board;
}

function isValid(board, row, col, val): boolean {
  // 同列不等于当前值
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === val) {
      return false;
    }
  }

  // 同行不等于当前值
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === val) {
      return false;
    }
  }
  // 同一粗实线不等于当前值
  // row 0 - 2 / 3 - 5 / 6 - 8
  // col 0 - 2 / 3 - 5 / 6 - 8
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === val) {
        return false;
      }
    }
  }

  return true;
}
```
