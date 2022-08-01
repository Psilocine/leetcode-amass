/**
 * 简单模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param n {number}
 * @returns {string}
 */
export function generateTheString(n: number): string {
  let ans: string = "";
  if (n % 2) {
    while (n > 0) {
      ans += "a";
      n--;
    }
  } else {
    while (n > 1) {
      ans += "a";
      n--;
    }
    ans += "b";
  }
  return ans;
}
