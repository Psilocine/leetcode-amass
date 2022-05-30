/**
 * 回溯 dfs
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param k {number}
 * @param n {number}
 * @returns {number[][]}
 */
export function combinationSum3(k: number, n: number): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];

  const backtrack = (start: number, sum: number) => {
    if (sum >= n) {
      if (sum === n && path.length === k) {
        ans.push(path.slice());
      }
      return;
    }
    for (let i = start; i <= 9; i++) {
      if (i > n) continue;
      path.push(i);
      backtrack(i + 1, sum + i);
      path.pop();
    }
  };

  backtrack(1, 0);

  return ans;
}
