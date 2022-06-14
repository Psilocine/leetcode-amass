/**
 * 模拟
 * X 先手，场上数量要么和 O 相等，要么比 O 多一个（下一回合）
 * @desc 时间复杂度 空间复杂度 O()
 * @param board {string[]}
 * @returns {boolean}
 */
export function validTicTacToe(board: string[]): boolean {
  let xnums: number = 0;
  let onums: number = 0;
  for (const row of board) {
    for (const char of row) {
      if (char === "X") {
        xnums++;
      } else if (char === "O") {
        onums++;
      }
    }
  }

  return !(
    (xnums !== onums && xnums - 1 !== onums) ||
    (xnums !== onums && win(board, "O")) ||
    (xnums - 1 !== onums && win(board, "X"))
  );
}

function win(board, p) {
  for (let i = 0; i < board.length; i++) {
    if (
      (board[i][0] === p && board[i][1] === p && board[i][2] === p) ||
      (board[0][i] === p && board[1][i] === p && board[2][i] === p)
    ) {
      // 横相等 列相等
      return true;
    }
  }

  // 对角线相等
  return (
    (board[0][0] === p && board[1][1] === p && board[2][2] === p) ||
    (board[2][0] === p && board[1][1] === p && board[0][2] === p)
  );
}
