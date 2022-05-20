/**
 * 模拟
 * @desc 时间复杂度 O(max(m, n)) 空间复杂度 O(1)
 * @param num1 {string}
 * @param num2 {string}
 * @returns {string}
 */
export function addString(num1: string, num2: string): string {
  const n = Math.max(num1.length, num2.length);
  // 补0
  num1 = num1.padStart(n, "0");
  num2 = num2.padStart(n, "0");

  let flag = 0;
  let temp = 0;
  let ans = "";

  for (let i = n - 1; i >= 0; --i) {
    temp = parseInt(num1[i]) + parseInt(num2[i]) + flag;
    flag = Math.floor(temp / 10);
    ans = (temp % 10) + ans;
  }

  if (flag > 0) {
    ans = 1 + ans;
  }

  return ans;
}
