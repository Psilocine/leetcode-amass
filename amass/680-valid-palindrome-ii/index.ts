/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param s {string}
 * @returns {boolean}
 */
export function validPalindrome(s: string): boolean {
  const n = s.length;

  let l = 0,
    r = n - 1;

  while (l < r && s.charAt(l) === s.charAt(r)) {
    l++;
    r--;
  }

  if (isPalindrome(s, l + 1, r)) {
    return true;
  }

  if (isPalindrome(s, l, r - 1)) {
    return true;
  }

  return false;
}

function isPalindrome(s: string, l: number, r: number) {
  while (l < r) {
    if (s.charAt(l) !== s.charAt(r)) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}
