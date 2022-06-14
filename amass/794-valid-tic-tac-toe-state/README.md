# 794. 有效的井字游戏

> 难度：中等
>
> https://leetcode.cn/problems/valid-tic-tac-toe-state/

## 题目

给你一个字符串数组 board 表示井字游戏的棋盘。当且仅当在井字游戏过程中，棋盘有可能达到 board 所显示的状态时，才返回 true 。

井字游戏的棋盘是一个 3 x 3 数组，由字符 ' '，'X' 和 'O' 组成。字符 ' ' 代表一个空位。

以下是井字游戏的规则：

- 玩家轮流将字符放入空位（' '）中。
- 玩家 1 总是放字符 'X' ，而玩家 2 总是放字符 'O' 。
- 'X' 和 'O' 只允许放置在空位中，不允许对已放有字符的位置进行填充。
- 当有 3 个相同（且非空）的字符填充任何行、列或对角线时，游戏结束。
- 当所有位置非空时，也算为游戏结束。
- 如果游戏结束，玩家不允许再放置字符。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/173569955-e7edf2d1-e0a5-43eb-a5a5-e6da7eb2cbd4.png)

```
输入：board = ["O  ","   ","   "]
输出：false
解释：玩家 1 总是放字符 "X" 。
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/173569962-639bdc24-3573-4b48-a5cf-2e08fa4c75c4.png)

```
输入：board = ["XOX"," X ","   "]
输出：false
解释：玩家应该轮流放字符。
```

**示例 3**

![image](https://user-images.githubusercontent.com/25545052/173569958-40d74ee5-d62a-4a62-99da-294a46465c35.png)

```
输入：board = ["XOX","O O","XOX"]
输出：true
```

提示：

- board.length == 3
- board[i].length == 3
- board[i][j] 为 'X'、'O' 或 ' '

## 解答

```typescript
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
```
