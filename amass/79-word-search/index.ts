/**
 * 回溯
 * @desc 时间复杂度 O(mn * 3 ^ L) 空间复杂度 O(mn) m n 为网格的长度和宽度，L 为 word 的长度
 * @param board {string[][]}
 * @param word {string}
 * @returns {boolean}
 */
export function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

  const check = (row, col, startIdx) => {
    if (board[row][col] !== word.charAt(startIdx)) {
      return false;
    } else if (startIdx === word.length - 1) {
      return true;
    }
    visited[row][col] = true;

    let result = false;
    for (const [dx, dy] of directions) {
      let newRow = row + dx;
      let newCol = col + dy;
      if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
        if (!visited[newRow][newCol]) {
          const flag = check(newRow, newCol, startIdx + 1);
          if (flag) {
            result = true;
            break;
          }
        }
      }
    }
    visited[row][col] = false;
    return result;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const flag = check(i, j, 0);
      if (flag) {
        return true;
      }
    }
  }
  return false;
}
