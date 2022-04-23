/**
 * 贪心 + 双指针
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(1)
 * @param s {string}
 * @returns {string}
 */
export function longestPalindrome(s: string): string {
  if (s.length < 2) return s;
  
  let maxStr = '';

  for (let i = 0; i < s.length; ++i) {
    let str= s[i]
    let l = i - 1;

    while(s[i + 1] === s[i]) {
      str += s[i]
      i++;
    }

    let r = i + 1;
    while(s[l] === s[r] && s[l] !== undefined) {
      str = s[l] + str + s[r]
      l--;
      r++;
    }
    if (str.length > maxStr.length) {
      maxStr = str; 
    }
  }

  return maxStr;
};

// 动态规划 TODO


// 中间扩展 TODO