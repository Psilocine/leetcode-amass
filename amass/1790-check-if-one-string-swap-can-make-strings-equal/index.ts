/**
 * 记数
 * @desc 时间复杂度 O(n) 空间复杂度 O(c)
 * @param s1 {string}
 * @param s2 {string}
 * @returns {boolean}
 */
export function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true;

  const n = s1.length;
  const diff: number[] = [];

  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      if (diff.length >= 2) {
        return false;
      } else diff.push(i);
    }
  }

  if (diff.length === 0) return true;

  if (diff.length !== 2) return false;

  return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
}
