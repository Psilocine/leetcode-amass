/**
 * 动态规划 - 自顶向下
 * @desc 时间复杂度 O(sn) 空间复杂度 O(s) s 是金额 n 是面额数
 * @param coins {number[]}
 * @param amount {number}
 * @returns {number}
 */
export function coinChange(coins: number[], amount: number): number {
  // 备忘录
  const memo: number[] = new Array(amount + 1).fill(-666);

  const dp = (n: number): number => {
    if (n === 0) return 0;
    if (n < 0) return -1;
    if (memo[n] !== -666) {
      return memo[n];
    }

    let ans: number = Infinity;
    for (let i = 0; i < coins.length; i++) {
      let subProblem = dp(n - coins[i]);
      if (subProblem === -1) continue;

      ans = Math.min(ans, subProblem + 1);
    }

    memo[n] = ans === Infinity ? -1 : ans;
    return memo[n];
  };

  return dp(amount);
}

/**
 * 动态规划 - 自底向上
 * @desc 时间复杂度 O(sn) 空间复杂度 O(s) s 是金额 n 是面额数
 * @param coins {number[]}
 * @param amount {number}
 * @returns {number}
 */
export function coinChange2(coins: number[], amount: number): number {
  if (!amount) {
    return 0;
  }

  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
