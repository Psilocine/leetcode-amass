/**
 * 模拟
 * @desc 时间复杂度 O(m * n) 空间复杂度 O(m + n)
 * @param num1 {string}
 * @param num2 {string}
 * @returns {string}
 */
export function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  const len1 = num1.length;
  const len2 = num2.length;
  const ans: number[] = new Array(len1 + len2 - 1).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      if (!ans[i + j]) {
        ans[i + j] = 0;
      }
      ans[i + j] += parseInt(num1[i]) * parseInt(num2[j]);
    }
  }
  let flag = 0;
  let temp = 0;
  for (let i = ans.length - 1; i >= 0; i--) {
    temp = ans[i] + flag;
    flag = Math.floor(temp / 10);
    ans[i] = temp % 10;
  }

  // 说明首位还有进位
  if (flag) {
    ans.unshift(flag);
  }

  return ans.join("");
}
