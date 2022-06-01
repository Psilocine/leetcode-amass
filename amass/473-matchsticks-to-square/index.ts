/**
 * 回溯
 * @desc 时间复杂度 O(4^n) 空间复杂度 O(n)
 * @param matchsticks {number[]}
 * @returns {boolean}
 */
export function makesquare(matchsticks: number[]): boolean {
  const sum = matchsticks.reduce((v, p) => v + p, 0);
  // 不能被 4 整除
  if (sum % 4 !== 0) return false;

  matchsticks.sort((a, b) => b - a);
  const edges = new Array(4).fill(0);
  let ans: boolean = false;
  const len = sum / 4;
  const backtrack = (index: number) => {
    if (index === matchsticks.length) {
      return true;
    }

    for (let i = 0; i < edges.length; i++) {
      edges[i] += matchsticks[index];
      if (edges[i] <= len && backtrack(index + 1)) {
        ans = true;
        return true;
      }
      edges[i] -= matchsticks[index];
    }
  };
  backtrack(0);

  return ans;
}
