/**
 * 模拟分割线
 * 假设从 s[1] 开始遍历，如果 s[i] = 0，score++；
 * 如果 s[i] = 1，说明是从右边的 0 少了，score--；
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param s {string}
 * @returns {number}
 */
export function maxScore(s: string): number {
  let score: number = 0;
  const n = s.length;
  if (s[0] === '0') {
    score++;
  }
  for (let i = 1; i < n; i++) {
    if (s[i] === '1') score++;
  }

  let ans: number = score;
  for (let i = 1; i < n - 1; i++) {
    if (s[i] === "1") score--;
    else if (s[i] === "0") score++;

    ans = Math.max(score, ans);
  }

  return ans;
}
