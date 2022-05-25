/**
 * 动态规划
 * 转换为以 i 结尾的最长子串
 * @desc 时间复杂度 O(n) 空间复杂度 O(1) 26 个小写字母 常量
 * @param p {string}
 * @returns {number}
 */
export function findSubstringInWraproundString(p: string): number {
  const dp = new Array(26).fill(0);

  let k = 0;
  let aChar = "a".charCodeAt(0);
  for (let i = 0; i < p.length; i++) {
    if (
      i > 0 &&
      (p[i].charCodeAt(0) - p[i - 1].charCodeAt(0) + 26) % 26 === 1
    ) {
      ++k;
    } else {
      k = 1;
    }

    dp[p[i].charCodeAt(0) - aChar] = Math.max(
      dp[p[i].charCodeAt(0) - aChar],
      k
    );
  }

  return dp.reduce((r, p) => r + p, 0);
}
