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
