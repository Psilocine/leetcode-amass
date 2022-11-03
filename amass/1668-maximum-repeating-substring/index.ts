/**
 * 动态规划
 * @desc 时间复杂度 O(n * m) 空间复杂度 O(n)
 * @param sequence {string}
 * @param word {string}
 * @returns {number}
 */
export function maxRepeating(sequence: string, word: string): number {
  const n = sequence.length,
    m = word.length;
  if (n < m) {
    return 0;
  }

  const f = new Array(n).fill(0);
  for (let i = m - 1; i < n; ++i) {
    let valid = true;
    for (let j = 0; j < m; ++j) {
      if (sequence[i - m + j + 1] !== word[j]) {
        valid = false;
        break;
      }
    }
    if (valid) {
      f[i] = (i === m - 1 ? 0 : f[i - m]) + 1;
    }
  }

  return Math.max(...f);
}
