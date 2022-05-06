/**
 * 排序
 * @desc 时间复杂度 O(nklogk) n 为 strs 长度，k 为最长单词长度 空间复杂度 O(nk)
 * @params strs {string[]}
 * @returns {string[][]}
 */
export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();
  for (const str of strs) {
    let array = Array.from(str);
    array.sort();
    let key = array.toString();
    let list = map.get(key) ? map.get(key) : [];
    list.push(str);
    map.set(key, list);
  }

  return Array.from(map.values());
}

/**
 * 计数
 * @desc 时间复杂度 O(nk) 空间复杂度 O(nk)
 * @params strs {string[]}
 * @returns {string[][]}
 */
export function groupAnagrams2(strs: string[]): string[][] {
  const map: any = new Object();
  for (const str of strs) {
    const count = new Array(26).fill(0);
    for (const char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    map[count] ? map[count].push(str) : (map[count] = [str]);
  }

  return Object.values(map);
}
