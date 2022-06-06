/**
 * 动态规划
 * dp[i] = Math.min(dp[i], dp[i - 1], dp[i - 4], dp[i - 9], ... 以此类推)
 * @desc 时间复杂度 O(n * sqrt n) 空间复杂度 O(n)
 * @param n {number}
 * @returns {number}
 */
export function numSquares(n: number): number {
  const dp: number[] = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  const maxSquare = Math.floor(Math.sqrt(n)) + 1;
  const squares = new Array(maxSquare);

  for (let i = 1; i < maxSquare; ++i) {
    squares[i] = i * i;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < maxSquare; ++j) {
      if (i < squares[j]) break;

      dp[i] = Math.min(dp[i], dp[i - squares[j]] + 1);
    }
  }

  return dp[n];
}

/**
 * bfs
 * @desc 时间复杂度 O(n^(h / 2)) 空间复杂度 O((sqrtn)^h)
 * @param n {number}
 * @returns {number}
 */
export function numSquares2(n: number): number {
  const squares = new Array();

  for (let i = 1; i * i <= n; ++i) {
    squares[i] = i * i;
  }

  let queue: Set<number> = new Set();
  queue.add(n);

  let level: number = 0;

  while (queue.size > 0) {
    level += 1;

    const nextQueue: Set<number> = new Set();

    for (const remainder of queue) {
      for (let i = 1; i < squares.length; i++) {
        if (remainder === squares[i]) {
          return level;
        } else if (remainder < squares[i]) {
          break;
        } else {
          nextQueue.add(remainder - squares[i]);
        }
      }
    }
    queue = nextQueue;
  }

  return level;
}
