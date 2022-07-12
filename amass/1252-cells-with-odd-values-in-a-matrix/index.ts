/**
 * 模拟
 * @desc 时间复杂度 O(q(m + n) + m * n) 空间复杂度 O(m * n) q 为 indices 的长度
 * @param m {number}
 * @param n {number}
 * @param indices {number[][]}
 * @returns {number}
 */
export function oddCells(m: number, n: number, indices: number[][]): number {
  const matrix: number[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(0));

  for (let i = 0; i < indices.length; i++) {
    const row = indices[i][0];
    const col = indices[i][1];
    for (let j = 0; j < n; j++) {
      matrix[row][j]++;
    }
    for (let j = 0; j < m; j++) {
      matrix[j][col]++;
    }
  }

  let ans: number = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] % 2) {
        ans++;
      }
    }
  }

  return ans;
}

/**
 * 模拟 - 空间优化
 * @desc 时间复杂度 O(q + m * n) 空间复杂度 O(m + n)
 * @param m {number}
 * @param n {number}
 * @param indices {number[][]}
 * @returns {number}
 */
export function oddCells2(m: number, n: number, indices: number[][]): number {
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);

  for (const index of indices) {
    rows[index[0]]++;
    cols[index[1]]++;
  }

  let ans: number = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((rows[i] + cols[j]) % 2) {
        ans++;
      }
    }
  }

  return ans;
}

/**
 * 计数优化
 * 当且仅当 rows[x] cols[y] 恰好有一个奇数一个偶数，他们相加为奇数
 * @desc 时间复杂度 O(q + m + n) 空间复杂度 O(m + n)
 * @param m {number}
 * @param n {number}
 * @param indices {number[][]}
 * @returns {number}
 */
export function oddCells3(m: number, n: number, indices: number[][]): number {
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);

  for (const index of indices) {
    rows[index[0]]++;
    cols[index[1]]++;
  }

  let oddX = 0,
    oddY = 0;
  for (let i = 0; i < m; i++) {
    if (rows[i] % 2) {
      oddX++;
    }
  }
  for (let i = 0; i < n; i++) {
    if (cols[i] % 2) {
      oddY++;
    }
  }

  return oddX * (n - oddY) + oddY * (m - oddX);
}
