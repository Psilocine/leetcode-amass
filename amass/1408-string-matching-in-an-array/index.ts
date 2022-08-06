/**
 * 模拟
 * @desc 时间复杂度 O(n^2 + L^2) 空间复杂度 O(1)
 * @param words {string[]}
 * @returns {string[]}
 */
export function stringMatching(words: string[]): string[] {
  const n = words.length;
  const ans: string[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;

      if (words[j].indexOf(words[i]) >= 0) {
        ans.push(words[i]);
        break;
      }
    }
  }

  return ans;
}
