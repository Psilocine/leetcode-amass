/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(C)
 * @param s {string}
 * @returns {number}
 */
export function maxLengthBetweenEqualCharacters(s: string): number {
  const n = s.length;
  let ans: number = -1;

  for (let i = 0; i < 26; i++) {
    const sub: string = String.fromCharCode(97 + i);
    ans = Math.max(ans, s.lastIndexOf(sub) - s.indexOf(sub) - 1);
  }

  return ans;
}
