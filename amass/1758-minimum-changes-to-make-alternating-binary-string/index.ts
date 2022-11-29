/**
 * 模拟
 * 只算一种情况即可，由于只有 0/1 字符，剩余的情况可以通过总长度减去第一种情况得出
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param s {string}
 * @returns {number}
 */
export function minOperations(s: string): number {
  let cnt: number = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (i % 2 && c === "1") {
      cnt++;
    }
  }

  return Math.min(cnt, s.length - cnt);
}
