/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param arr {number[]}
 * @param pieces {number[][]}
 * @returns {boolean}
 */
export function canFormArray(arr: number[], pieces: number[][]): boolean {
  const n = arr.length,
    m = pieces.length;

  const index = new Map();
  for (let i = 0; i < m; i++) {
    index.set(pieces[i][0], i);
  }

  for (let i = 0; i < n; ) {
    if (!index.has(arr[i])) {
      return false;
    }
    const j = index.get(arr[i]),
      len = pieces[j].length;
    for (let k = 0; k < len; k++) {
      if (arr[i + k] !== pieces[j][k]) {
        return false;
      }
    }

    i = i + len;
  }

  return true;
}
