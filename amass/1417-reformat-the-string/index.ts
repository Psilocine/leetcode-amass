/**
 * 双指针 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {string}
 */
export function reformat(s: string): string {
  let num = "",
    letter = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "a") letter += s[i];
    else num += s[i];
  }
  let n = num.length,
    m = letter.length;
  if (Math.abs(n - m) > 1) return "";

  let ans = "";
  while (ans.length < s.length) {
    console.log(n, m);
    if (n < m) ans += letter[--m];
    else if (n > m) ans += num[--n];
    else {
      // 比 'a' 大，证明尾部是字母，应该添加数字
      if (ans.length !== 0 && ans[ans.length - 1] >= "a") ans += num[--n];
      else ans += letter[--m];
    }
  }

  return ans;
}
