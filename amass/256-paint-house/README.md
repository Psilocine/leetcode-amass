# 256. 粉刷房子

> 难度：中等
>
> https://leetcode.cn/problems/paint-house/

## 题目

假如有一排房子，共 n 个，每个房子可以被粉刷成红色、蓝色或者绿色这三种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。

当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个  n x 3  的正整数矩阵 costs 来表示的。

例如，costs[0][0] 表示第 0 号房子粉刷成红色的成本花费；costs[1][2]  表示第 1 号房子粉刷成绿色的花费，以此类推。

请计算出粉刷完所有房子最少的花费成本。

**示例 1**

```
输入: costs = [[17,2,17],[16,16,5],[14,3,19]]
输出: 10
解释: 将 0 号房子粉刷成蓝色，1 号房子粉刷成绿色，2 号房子粉刷成蓝色。
     最少花费: 2 + 5 + 3 = 10。
```

**示例 2**

```
输入: costs = [[7,6,2]]
输出: 2
```

## 解答

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(n) 空间复杂度 O(3n) = O(n)
 * @param costs {number[][]}
 * @returns {number}
 */
export function minCost(costs: number[][]): number {
  const n: number = costs.length;

  // dp[i][0|1|2]
  const dp: number[][] = new Array(n + 1)
    .fill(0)
    .map(() => new Array(3).fill(0));

  for (let i = 1; i <= n; i++) {
    // 当前房子的颜色不能与上一个房子的颜色相同
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i - 1][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i - 1][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i - 1][2];
  }

  return Math.min(...dp[n]);
}

/**
 * 动态规划 - 空间优化
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param costs {number[][]}
 * @returns {number}
 */
export function minCost2(costs: number[][]): number {
  const n: number = costs.length;

  // dp[0|1|2]
  let dp: number[] = new Array(3).fill(0);

  for (let i = 0; i < n; i++) {
    let newDp = new Array(3).fill(0);
    for (let j = 0; j < 3; j++) {
      newDp[j] = Math.min(dp[(j + 1) % 3], dp[(j + 2) % 3]) + costs[i][j];
    }

    dp = newDp;
  }

  return Math.min(...dp);
}
```
