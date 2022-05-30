/**
 * 回溯 dfs
 * 排序，让相同的元素靠在一起
 * @desc 时间复杂度 O(n * 2 ^ n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number[][]}
 */
export function subsetsWithDup(nums: number[]): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];

  nums.sort((a, b) => a - b);
  const backtrack = (start: number) => {
    ans.push(path.slice());
    if (start > nums.length - 1) {
      return;
    }

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i - 1] === nums[i]) continue;

      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack(0);

  return ans;
}
