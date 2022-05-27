/**
 * 一次遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param words {string[]}
 * @param word1 {string}
 * @param word2 {string}
 * @returns {number}
 */
export function findClosest(
  words: string[],
  word1: string,
  word2: string
): number {
  let q = -1;
  let p = -1;
  let ans = Infinity;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      q = i;
    } else if (words[i] === word2) {
      p = i;
    }

    if (p !== -1 && q !== -1) {
      ans = Math.min(ans, Math.abs(p - q));
    }
  }
  return ans;
}
