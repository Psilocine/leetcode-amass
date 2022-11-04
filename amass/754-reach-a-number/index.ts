/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param target {number}
 * @returns {number}
 */
export function reachNumber(target: number): number {
  target = Math.abs(target)

  let s = 0, n = 0;
  while(s < target || (s - target) % 2 === 1) {
    n++;
    s += n
  }
  return n;
}
