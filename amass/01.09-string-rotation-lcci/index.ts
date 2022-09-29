/**
 * 搜索子字符串
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s1 {string}
 * @param s2 {string}
 * @returns {boolean}
 */
export function isFlipedString(s1: string, s2: string): boolean {
  // const n = s1.length;
  // const m = s2.length;
  // if (n !== m) return false;

  // return `${s1}${s1}`.indexOf(s2) >= 0
  return s1.length === s2.length && (s1 + s1).indexOf(s2) !== -1;
}
