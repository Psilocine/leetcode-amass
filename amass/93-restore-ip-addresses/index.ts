/**
 * 回溯
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {string[]}
 */
export function restoreIpAddresses(s: string): string[] {
  const n = s.length;
  const ans: string[] = [];

  // 组成不了 ip
  if (n < 4 || n > 12) return ans;

  const backtrack = (subRes, start) => {
    if (subRes.length === 4 && start === s.length) {
      ans.push(subRes.join("."));
      return;
    }

    // 枚举出选择，三种切割长度
    for (let len = 1; len <= 3; len++) {
      // 加上要切的长度就越界，不能切这个长度
      if (start + len - 1 >= s.length) return;
      // 不能切出'0x'、'0xx'
      if (len !== 1 && s[start] === "0") return;

      const str = s.substring(start, start + len);
      if (len === 3 && +str > 255) return;

      subRes.push(str);
      backtrack(subRes, start + len);
      subRes.pop();
    }
  };

  backtrack([], 0);
  return ans;
}
