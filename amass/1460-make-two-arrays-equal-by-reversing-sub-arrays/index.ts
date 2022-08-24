/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param target {number[]}
 * @param arr {number[]}
 * @returns {boolean}
 */
export function canBeEqual(target: number[], arr: number[]): boolean {
  const n = arr.length;
  const m = target.length;
  if (n !== m) return false;

  const map = new Map();

  for (let i = 0; i < m; i++) {
    map.set(target[i], (map.get(target[i]) || 0) + 1);
  }

  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      const val = map.get(arr[i]);
      // 数量不匹配
      if (val === 0) return false;

      map.set(arr[i], val - 1);
    } else return false;
  }

  return true;
}
