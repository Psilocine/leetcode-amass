/**
 * 遍历 + 哈希表
 * @desc 时间复杂度 O(n * m) 空间复杂度 O(C) n 为 words 的长度 m 为 words 单词的平均长度 C 为26个字母
 * @param words {string[]}
 * @param order {string}
 * @returns {boolean}
 */
export function isAlienSorted(words: string[], order: string): boolean {
  const map: number[] = new Array(26).fill(0);
  const aCode: number = "a".charCodeAt(0);
  for (let i = 0; i < order.length; i++) {
    map[order[i].charCodeAt(0) - aCode] = i;
  }
  for (let i = 1; i < words.length; i++) {
    let valid = false;
    for (let j = 0; j < words[i - 1].length && j < words[i].length; j++) {
      let prev = map[words[i - 1][j].charCodeAt(0) - aCode];
      let curr = map[words[i][j].charCodeAt(0) - aCode];
      if (prev < curr) {
        valid = true;
        break;
      } else if (prev > curr) {
        return false;
      }
    }
    if (!valid) {
      // 比较两个字符串的长度
      if (words[i - 1].length > words[i].length) {
        return false;
      }
    }
  }
  return true;
}
