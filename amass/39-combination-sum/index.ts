/**
 * 回溯
 * @desc 时间复杂度 O(S) S 为所有可行解的长度之和 空间复杂度 O(target) 取决于递归的栈深度
 * @param candidates {number[]}
 * @param target {number}
 * @returns {number[][]}
 */
export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const res = [];
  const dfs = (target: number, combine: number[], idx: number) => {
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      res.push(combine);
      return;
    }
    // 直接跳过
    dfs(target, combine, idx + 1);
    // 选择当前数
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  };
  dfs(target, [], 0);
  return res;
}
