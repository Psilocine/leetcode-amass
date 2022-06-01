# 322. 零钱兑换

> 难度：中等
>
> https://leetcode.cn/problems/coin-change/

## 题目

给你一个整数数组 `coins` ，表示不同面额的硬币；以及一个整数 `amount` ，表示总金额。

计算并返回可以凑成总金额所需的 **最少的硬币个数** 。如果没有任何一种硬币组合能组成总金额，返回 `-1` 。

你可以认为每种硬币的数量是无限的。

**示例 1**

```
输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1
```

**示例 2**

```
输入：coins = [2], amount = 3
输出：-1
```

**示例 3**

```
输入：coins = [1], amount = 0
输出：0
```

提示：

- 1 <= coins.length <= 12
- 1 <= coins[i] <= 231 - 1
- 0 <= amount <= 104

## 解答

```typescript
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
```
