/**
 * 回溯
 * @desc 时间复杂度 O(n * n!) 空间复杂度 O(n) n 为序列的长度
 * @param nums {number[]}
 * @returns {numebr[][]}
 */
export function permute(nums: number[]): number[][] {
  const res = [];

  const dfs = (combine) => {
    if (combine.length === nums.length) {
      res.push(combine);
      return;
    }

    nums.forEach((v) => {
      if (!combine.includes(v)) {
        dfs([...combine, v]);
      }
    });
  };

  dfs([]);
  return res;
}
