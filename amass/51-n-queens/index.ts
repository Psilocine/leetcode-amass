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
