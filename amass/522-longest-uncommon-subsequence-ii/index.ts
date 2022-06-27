/**
 * 贪心 + 双指针
 * @desc 时间复杂度 O(n^2 * l) 空间复杂度 O(1) l 是字符串的平均长度
 * @param strs {string[]}
 * @returns {number}
 */
export function findLUSlength(strs: string[]): number {
  const n = strs.length;
  let ans = -1;
  for (let i = 0; i < n; ++i) {
    let check = true;
    for (let j = 0; j < n; ++j) {
      if (i !== j && isSubseq(strs[i], strs[j])) {
        check = false;
        break;
      }
    }
    if (check) {
      ans = Math.max(ans, strs[i].length);
    }
  }
  return ans;
}

function isSubseq(s: string, t: string) {
  let ptS = 0,
    ptT = 0;
  while (ptS < s.length && ptT < t.length) {
    if (s[ptS] === t[ptT]) {
      ++ptS;
    }
    ++ptT;
  }
  return ptS === s.length;
}
