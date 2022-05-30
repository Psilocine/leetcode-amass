/**
 * 回溯 dfs
 * @desc 时间复杂度 O(n * n!) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number[][]}
 */
export function permuteUnique(nums: number[]): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];
  const used = {};

  nums.sort((a, b) => a - b);

  const backtrack = () => {
    if (path.length === nums.length) {
      ans.push(path.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) {
        continue;
      }

      path.push(nums[i]);
      used[i] = true;
      backtrack();
      path.pop();
      used[i] = false;
    }
  };

  backtrack();

  return ans;
}
