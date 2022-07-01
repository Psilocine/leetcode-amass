/**
 * 哈希表
 * @desc 时间复杂度 O(n)空间复杂度 O(n)
 * @param s {string}
 * @param t {string}
 * @returns {boolean}
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let ans: boolean = false;

  const map = new Map();

  const map2 = new Map();

  for (let i = 0; i < s.length; i++) {
    const sCh = s.charAt(i);
    map.set(sCh, (map.get(sCh) || 0) + 1);
  }

  let valid = 0;

  for (let i = 0; i < t.length; i++) {
    const tCh = t.charAt(i);
    map2.set(tCh, (map2.get(tCh) || 0) + 1);
    if (map.get(tCh) === map2.get(tCh)) {
      valid++;
    }
  }

  return valid === map.size;
}
