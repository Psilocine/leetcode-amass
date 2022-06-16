/**
 * 纵向扫描
 * @desc 时间复杂度 O(mn) 空间复杂度 O(1)
 * @param strs {string[]}
 * @returns {string}
 */
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
  let ans: string = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) {
        return ans;
      }
    }
    ans += strs[0][i];
  }

  return ans;
}
