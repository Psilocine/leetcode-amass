/**
 * 回溯
 * @desc 时间复杂度 O(n * 2^n) 空间复杂度 O(n * 2^n)
 * @param nums {number[]}
 * @returns {number[][]}
 */
export function subsets(nums: number[]): number[][] {
  const ans = [];
  const path = [];

  const backtrack = (startIdx) => {
    ans.push(path.slice());

    for (let i = startIdx; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  };
  backtrack(0);
  return ans;
}
