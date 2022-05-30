/**
 * 回溯 dfs
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param n {number}
 * @param k {number}
 * @returns {number[][]}
 */
export function combine(n: number, k: number): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];

  const backtrack = (start) => {
    if (path.length === k) {
      ans.push(path.slice());
      return;
    }

    /**
     * 剪枝
     * 已选择个数 path.length
     * 还需要个数 k - path.length
     * 在集合 n 中至多要从该起始位置 n - (k - path.length) + 1 开始遍历
     * +1 因为包括起始位置
     */
    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack(1);
  return ans;
}
