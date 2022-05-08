# 79. 单词搜索

> 难度：中等
>
> https://leetcode-cn.com/problems/word-search/

## 题目

给定一个 `m x n` 二维字符网格 `board` 和一个字符串单词 `word` 。如果 `word` 存在于网格中，返回 `true` ；否则，返回 `false` 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/167299383-f89bfe59-b975-486e-99ca-4f731ed7ff04.png)

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/167299382-b8ef5f96-d5b3-4e4a-8b1f-f79bce0e791f.png)

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
输出：true
```

**示例 3**

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
输出：false
```

**提示：**

- m == board.length
- n = board[i].length
- 1 <= m, n <= 6
- 1 <= word.length <= 15
- board 和 word 仅由大小写英文字母组成

**进阶：**

你可以使用搜索剪枝的技术来优化解决方案，使其在 board 更大的情况下可以更快解决问题？

## 解答

```typescript
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
```
