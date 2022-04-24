/**
 * 动态规划
 * dp[i, j] = dp[i + 1, j - 1] ^ (s[i] === s[j])
 * 边界条件
 * dp[i, i] true
 * dp[i, i + 1] ^ s[i] === s[i + 1] true
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(n^2)
 * @param s {string}
 * @returns {string}
 */
export function longestPalindrome(s: string): string {
  const len = s.length;
  if (len < 2) return s;

  const dp = new Array(len).fill(0).map((v) => new Array(len).fill(false));

  let maxLen = 1;
  let begin = 0;

  // 单个字符一定是回文子串
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  for (let j = 1; j < len; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        // 长度小于等于 2，一定是回文子串
        if (j - 1 - (i + 1) + 1 < 2) {
          dp[i][j] = true;
        } else {
          // 状态转移
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }

  return s.substring(begin, begin + maxLen);
}

/**
 * 贪心 + 双指针
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(1)
 * @param s {string}
 * @returns {string}
 */
export function longestPalindrome2(s: string): string {
  if (s.length < 2) return s;

  let maxStr = ""; // 当前最大的回文串

  for (let i = 0; i < s.length; ++i) {
    let str = s[i]; // 当前遍历的这个字符为中心的回文串
    let l = i - 1; // 左侧遍历开始索引

    // 找到当前字符后连接的所有一样的字符,更新 i 的指针和 str,获取连续的字符
    while (s[i + 1] === s[i]) {
      str += s[i];
      i++;
    }

    let r = i + 1; // 右侧遍历开始索引

    // 从连续字符两端开始像两侧扩展,直到越界或者不一致,一致的直接拼到 str 中
    while (s[l] === s[r] && s[l] !== undefined) {
      str = s[l] + str + s[r];
      l--;
      r++;
    }
    if (str.length > maxStr.length) {
      maxStr = str;
    }
  }

  return maxStr;
}
/**
 * 中间扩展算法
 * 从每一个位置出发，向两边扩散，直到遇到的不是回文串
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(1)
 * @param s {string}
 * @returns {string}
 */
export function longestPalindrome3(s: string): string {
  const len = s.length;
  if (len < 2) return s;

  let maxStr = "";

  for (let i = 0; i < len; i++) {
    let str = s[i];
    let left = i - 1;
    let right = i + 1;

    // 向左寻找相同的值
    while (left >= 0 && s[left] === s[i]) {
      str = s[left] + str;
      left--;
    }

    // 向右寻找相同的值
    while (right < len && s[right] === s[i]) {
      str = str + s[right];
      right++;
    }

    // 开始左右指针往外遍历，直到不符合回文串
    while (left >= 0 && right < len && s[left] === s[right]) {
      str = s[left] + str + s[right];
      left--;
      right++;
    }

    if (str.length > maxStr.length) {
      maxStr = str;
    }
  }

  return maxStr;
}
