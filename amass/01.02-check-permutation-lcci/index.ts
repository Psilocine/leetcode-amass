/**
 * 排序
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param s1 {string}
 * @param s2 {string}
 * @returns {boolean}
 */
export function CheckPermutation(s1: string, s2: string): boolean {
  return (
    s1.length === s2.length &&
    [...s1].sort().join("") === [...s2].sort().join("")
  );
}

/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s1 {string}
 * @param s2 {string}
 * @returns {boolean}
 */
export function CheckPermutation2(s1: string, s2: string): boolean {
  const n = s1.length;
  const m = s2.length;
  if (n !== m) return false;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const item = s1.charAt(i);
    map.set(item, (map.get(item) || 0) + 1);
  }

  for (let i = 0; i < m; i++) {
    const item = s2.charAt(i);
    map.set(item, (map.get(item) || 0) - 1);

    if (map.get(item) < 0) return false;
  }

  return true;
}
