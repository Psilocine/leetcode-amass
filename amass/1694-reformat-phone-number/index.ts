/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param number {string}
 * @returns {string}
 */
export function reformatNumber(number: string): string {
  const s: string = number.replace(/[^0-9]/g, "");

  const n: number = s.length;
  let ans: string = "";

  for (let i = 0; i < n; i += 3) {
    if (ans) ans += "-";

    if (i + 5 > n) {
      if (i + 3 >= n) {
        ans += `${s.substring(i)}`;
      } else {
        ans += `${s.substring(i, i + 2)}-${s.substring(i + 2)}`;
      }
      break;
    }

    ans += s.substring(i, i + 3);
  }
  return ans;
}
