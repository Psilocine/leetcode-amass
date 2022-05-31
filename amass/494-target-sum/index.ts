/**
 * dfs
 * @desc 时间复杂度 O(2 ^ n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number}
 */
export function findTargetSumWays(nums: number[], target: number): number {
  let ans: number = 0;

  const backtrack = (sum, start) => {
    if (start === nums.length) {
      if (sum === target) ans++;

      return;
    }

    backtrack(sum - nums[start], start + 1);
    backtrack(sum + nums[start], start + 1);
  };

  backtrack(0, 0);

  return ans;
}

/**
 * 动态规划 TODO
 * @desc 时间复杂度 O(n * (sum - target)) 空间复杂度 O(sum - target)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number}
 */
export function findTargetSumWays2(nums: number[], target: number): number {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }

  const diff = sum - target;
  if (diff < 0 || diff % 2 !== 0) {
    return 0;
  }

  const neg = Math.floor(diff / 2);
  const dp = new Array(neg + 1).fill(0);
  dp[0] = 1;
  for (const num of nums) {
    for (let j = neg; j >= num; j--) {
      dp[j] += dp[j - num];
    }
  }

  return dp[neg];
}
