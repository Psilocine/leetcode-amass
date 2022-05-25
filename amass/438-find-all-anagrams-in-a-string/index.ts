/**
 * 滑动窗口
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param s {string}
 * @param p {string}
 * @returns {number[]}
 */
export function findAnagrams(s: string, p: string): number[] {
  const ans: number[] = [];
  const window: Map<string, number> = new Map();
  const need: Map<string, number> = new Map();

  for (const char of p) {
    if (!window.has(char)) {
      window.set(char, 0);
    }
    if (!need.has(char)) {
      need.set(char, 0);
    }
    need.set(char, need.get(char) + 1);
  }

  let left = 0,
    right = 0;
  
    let valid = 0;
  while (right < s.length) {
    const c = s[right];
    right++;

    if (need.has(c)) {
      window.set(c, window.get(c) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    while(right - left >= p.length) {
      if (valid === need.size) {
        ans.push(left);
      }
      const d = s[left];
      left++;

      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }

  return ans;
}
