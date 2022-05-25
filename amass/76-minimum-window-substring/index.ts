/**
 * 滑动窗口 + 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(1) 哈希表最多用到 26 个小写英文字母
 * @param s {string}
 * @param t {string}
 * @returns {string}
 */
export function minWindow(s: string, t: string): string {
  const window: Map<string, number> = new Map();
  const need: Map<string, number> = new Map();

  // 确定窗口内部的条件
  for (const c of t) {
    if (!need.has(c)) {
      need.set(c, 0);
    }
    if (!window.has(c)) {
      window.set(c, 0);
    }
    need.set(c, need.get(c) + 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0;
  let start = 0;
  let end = Infinity;
  while (right < s.length) {
    const c = s[right];
    // 扩大窗口
    right++;

    // 处理滑动窗口数据更新
    if (need.has(c)) {
      window.set(c, window.get(c) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    while (valid === need.size) {
      if (right - left < end - start) {
        start = left;
        end = right;
      }
      const d = s[left];
      // 缩小窗口
      left++;

      // 处理滑动窗口数据更新
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }

  return end === Infinity ? "" : s.substring(start, end);
}
