/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param allowed {string}
 * @param words {string[]}
 * @returns {number}
 */
export function countConsistentStrings(
  allowed: string,
  words: string[]
): number {
  const map: boolean[] = new Array(26).fill(false);
  const aCode = "a".charCodeAt(0);
  let ans: number = 0;

  for (let i = 0; i < allowed.length; i++) {
    const itemCode = allowed.charCodeAt(i) - aCode;
    map[itemCode] = true;
  }

  for (let i = 0; i < words.length; i++) {
    const item = words[i];
    let flag = true;

    for (let j = 0; j < item.length; j++) {
      const itemCode = item.charCodeAt(j) - aCode;
      if (!map[itemCode]) {
        flag = false;
        break;
      }
    }

    if (flag) ans++;
  }

  return ans;
}
