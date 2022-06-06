/**
 * 双指针
 * @desc 时间复杂度 O(sqrtc) 空间复杂度 O(1)
 * @param c {number}
 * @returns {boolean}
 */
export function judgeSquareSum(c: number): boolean {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const res = left * left + right * right;
    if (res === c) {
      return true;
    } else if (res > c) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}
