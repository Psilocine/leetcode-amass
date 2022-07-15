/**
 * split 反向遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {number}
 */
export function lengthOfLastWord(s: string): number {
  s = s.trim();
  const words = s.split(" ");
  return words[words.length - 1].length;
}

/**
 * 模拟 反向遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {number}
 */
export function lengthOfLastWord2(s: string): number {
  let index = s.length - 1;
  while (s[index] === " ") {
    index--;
  }
  let len = 0;
  while (index >= 0 && s[index] !== " ") {
    len++;
    index--;
  }

  return len;
}
