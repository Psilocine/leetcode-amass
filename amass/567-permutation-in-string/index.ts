/**
 * 滑动窗口
 * @desc 时间复杂度 O(n + m) 空间复杂度 O(1)
 * @param s1 {string}
 * @param s2 {string}
 * @returns {boolean}
 */
export function checkInclusion(s1: string, s2: string): boolean {
  const n = s1.length;
  const m = s2.length;
  if (n > m) {
    return false;
  }

  const cnt1 = new Array(26).fill(0);
  const cnt2 = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);
  for (let i = 0; i < n; i++) {
    ++cnt1[s1.charCodeAt(i) - aCode];
    ++cnt2[s2.charCodeAt(i) - aCode];
  }
  if (cnt1.toString() === cnt2.toString()) {
    return true;
  }

  for (let i = n; i < m; ++i) {
    ++cnt2[s2.charCodeAt(i) - aCode];
    --cnt2[s2.charCodeAt(i - n) - aCode];
    if (cnt1.toString() === cnt2.toString()) {
      return true;
    }
  }
  return false;
}
