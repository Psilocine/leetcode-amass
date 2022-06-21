/**
 * 模拟反转
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param x {number}
 * @returns {number}
 */
export function reverse(x: number): number {
  let ans: number = parseInt(x.toString().split("").reverse().join(""));

  if (x < 0) {
    ans *= -1;
  }

  return ans > Math.pow(2, 31) - 1 || ans < -Math.pow(2, 31) ? 0 : ans;
}

/**
 * 数学
 * @desc 时间复杂度 O(logx) 空间复杂度 O(1)
 * @param x {number}
 * @returns {number}
 */
export function reverse2(x: number): number {
  let ans: number = 0;
  const max: number = Math.pow(2, 31) - 1;
  const min: number = -Math.pow(2, 31);
  while (x !== 0) {
    const digit = x % 10;
    x = ~~(x / 10);
    ans = ans * 10 + digit;
    if (ans < min || ans > max) {
      return 0;
    }
  }
  return ans;
}
