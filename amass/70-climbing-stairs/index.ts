/**
 * 递归
 *
 * @desc 时间复杂度 O(2^n) 空间复杂度 O(n)
 * @param n {Number}
 * @return {Number}
 */
export function climbingStairs2(n: number): number {
  if (n <= 2) {
    return n;
  }
  // 可以通过 Map 缓存来降低复杂度
  return climbingStairs2(n - 1) + climbingStairs2(n - 2);
}

/**
 * 动态规划
 *
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param n {Number}
 * @returns {Number}
 */
export function climbingStairs(n: number): number {
  // f(n) = f(n - 1) + f(n - 2)
  let last = 0;
  let current = 0;
  let r = 1; // 初始值，n = 0 也为 1

  for (let i = 1; i <= n; i++) {
    last = current;
    current = r;
    r = last + current;
  }

  return r;
}
