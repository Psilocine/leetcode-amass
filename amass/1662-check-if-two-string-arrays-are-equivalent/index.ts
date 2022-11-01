/**
 * 遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param word1 {string[]}
 * @param word2 {string[]}
 * @returns {boolean}
 */
export function arrayStringsAreEqual(
  word1: string[],
  word2: string[]
): boolean {
  const str1: string = word1.reduce((preValue, value) => {
    return preValue + value;
  }, "");

  const str2: string = word2.reduce((preValue, value) => {
    return preValue + value;
  }, "");

  return str1 === str2;
}
