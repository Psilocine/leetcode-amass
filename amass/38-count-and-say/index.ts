/**
 * 模拟
 * @desc 时间复杂度 O(n * m) 空间复杂度 O(m)
 * @param n {number}
 * @returns {string}
 */
export function countAndSay(n: number): string {
  let str = "1";
  for (let i = 2; i <= n; i++) {
    const sb = [];
    let start = 0;
    let pos = 0;

    while (pos < str.length) {
      while (pos < str.length && str[pos] === str[start]) {
        pos++;
      }
      sb.push(`${pos - start + str[start]}`);
      start = pos;
    }
    str = sb.join("");
  }

  return str;
}
