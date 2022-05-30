/**
 * 回溯 dfs
 * @desc 时间复杂度 O(n * 2^n) 空间复杂度 O(n)
 * @param candidates {number[]}
 * @param target {number}
 * @returns {number[][]}
 */
export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];
  candidates.sort((a, b) => a - b);

  const backtrack = (start: number, sum: number) => {
    if (sum >= target) {
      if (sum === target) {
        ans.push(path.slice());
      }
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) continue;
      if (i > start && candidates[i - 1] === candidates[i]) continue;
      path.push(candidates[i]);
      backtrack(i + 1, sum + candidates[i]);
      path.pop();
    }
  };

  backtrack(0, 0);

  return ans;
}
