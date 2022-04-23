/**
 * 哈希表 + 双指针 + 滑动窗口
 * @desc 时间复杂度 O(n) 空间复杂度 O(m) m 为出现的字符
 * @param s {string}
 * @returns {number}
 */
export function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) return s.length;

  let max = 0;
  let left = 0;
  let right: number = 0;
  const set = new Set();

  for (; right < s.length; ++right) {
    const ch = s.charAt(right);

    // 当表里有该字符，左指针开始收缩
    while (set.has(ch)) {
      set.delete(s.charAt(left));
      left++;
    }

    set.add(ch);

    max = Math.max(max, right - left + 1);
  }

  return max;
}
