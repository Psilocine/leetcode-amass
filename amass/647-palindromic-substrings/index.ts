/**
 * 暴力求解
 * @desc 时间复杂度 O(n^3) 空间复杂度 O(1)
 * @param s {string}
 * @returns {number}
 */
export function countSubstrings(s: string): number {
  if (!s.length) return 0;

  // 每一个单字符都是一个回文子串
  let sum = 0;
  let start = 0;
  let end = 1;
  while (true) {
    const item = s.slice(start, end);
    const revert = item.split("").reverse().join("");
    if (item === revert) {
      console.log(item, start, end);
      sum += 1;
    }
    end += 1;
    if (end > s.length) {
      start += 1;
      end = start + 1;
      if (start >= s.length) {
        return sum;
      }
    }
  }
}

/**
 * 动态规划
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(n^2)
 * @param s {string}
 * @returns {number}
 */
export function countSubstrings2(s: string): number {
  const len = s.length;

  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false); // 二维矩阵
  }

  let sum = 0;
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      // 单字符
      if (i === j) {
        sum++;
        dp[i][j] = true;
      } else if (j - i === 1 && s[i] === s[j]) {
        // 双字符 且相等
        sum++;
        dp[i][j] = true;
      } else if (j - i > 1 && s[i] === s[j] && dp[i + 1][j - 1]) {
        // 超过两个字符 且相等（首尾字符相同）且剩余子串是一个回文串
        sum++;
        dp[i][j] = true;
      }
    }
  }

  return sum;
};


/**
 * 动态规划
 * 降维，空间复杂度优化为 O(n)
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(n)
 * @param s {string}
 * @returns {number}
 */
export function countSubstrings3(s: string): number {
  const len = s.length;

  const dp = new Array(len);

  let sum = 0;
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      // 单字符
      if (i === j) {
        sum++;
        dp[i] = true;
      } else if (j - i === 1 && s[i] === s[j]) {
        // 双字符 且相等
        sum++;
        dp[i] = true;
      } else if (j - i > 1 && s[i] === s[j] && dp[i + 1]) {
        // 超过两个字符 且相等（首尾字符相同）且剩余子串是一个回文串
        sum++;
        dp[i] = true;
      } else {
        dp[i] = false;
      }
    }
  }

  return sum;
};