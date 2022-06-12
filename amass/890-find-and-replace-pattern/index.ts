/**
 * 模拟
 * 第一次出现的字母为 1 依次累加
 * eg. abb -> 122
 * @desc 时间复杂度 O(mn) 空间复杂度 O(m)
 * @param words {string[]}
 * @param pattern {string}
 * @returns {string[]}
 */
export function findAndReplacePattern(
  words: string[],
  pattern: string
): string[] {
  const tmpl = exchage(pattern);
  const ans: string[] = [];
  for (let i = 0; i < words.length; i++) {
    if (exchage(words[i]) === tmpl) {
      ans.push(words[i]);
    }
  }

  return ans;
}
// 把字母转换成数字
function exchage(words) {
  const map = new Map();

  let _id = 1;
  let ret: string = "";
  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      ret += map.get(words[i]);
    } else {
      map.set(words[i], _id++);
      ret += _id;
    }
  }

  return ret;
}
