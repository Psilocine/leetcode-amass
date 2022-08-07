/**
 Do not return anything, modify s in-place instead.
 */
/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param s {string[]}
 * @return {string[]}
 */
export function reverseString(s: string[]): string[] {
  const n = s.length;
  for (let left = 0, right = n - 1; left < right; ++left, --right) {
    [s[left], s[right]] = [s[right], s[left]];
  }

  return s;
}
