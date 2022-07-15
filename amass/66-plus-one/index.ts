/**
 * 模拟
 * carry 是否进位
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param digits {number[]}
 * @returns {number[]}
 */
export function plusOne(digits: number[]): number[] {
  const n = digits.length;
  let carry = false;
  digits[n - 1]++;
  for (let i = n - 1; i >= 0; i--) {
    if (carry) digits[i]++;

    carry = digits[i] > 9;
    digits[i] %= 10;
  }

  if (carry) digits.unshift(1);
  return digits;
}
