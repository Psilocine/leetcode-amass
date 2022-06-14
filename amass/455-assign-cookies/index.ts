/**
 * 排序 + 贪心
 * @desc 时间复杂度 O(mlogm + nlogn) 空间复杂度 O(1)
 * @param g {number[]}
 * @param s {number[]}
 * @returns {number}
 */
export function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let ans: number = 0;
  let cookieIdx: number = 0;
  for (let i = 0; i < g.length; i++) {
    while(s[cookieIdx] < g[i]) {
      cookieIdx++;
    }

    if (cookieIdx === s.length) {
      break;
    }

    ans++;
    cookieIdx++;
  }

  return ans;
}
