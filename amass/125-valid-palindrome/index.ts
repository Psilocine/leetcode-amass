/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param s {string}
 * @returns {boolean}
 */
export function validPalindrome(s: string): boolean {
  s = s.replace(/[\W_]/g, "").toLocaleLowerCase();

  return isPalindrome(s);
}

function isPalindrome(s: string) {
  const n = s.length;
  for (let i = 0; i < n / 2; i++) {
    if (s.charAt(i) !== s.charAt(n - i - 1)) {
      return false;
    }
  }

  return true;
}
