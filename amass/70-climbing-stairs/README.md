# 70. 爬楼梯

> 难度：简单
>
> https://leetcode-cn.com/problems/climbing-stairs/

## 题目

假设你正在爬楼梯。需要 `n` 阶你才能到达楼顶。

每次你可以爬 `1` 或 `2` 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**示例 1**

```
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

**示例 2**

```
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

## 解答
```typescript
/**
 * 递归
 *
 * @desc 时间复杂度 O(2^n) 空间复杂度 O(n)
 * @param n {Number}
 * @return {Number}
 */
export function climbingStairs2(n: number): number {
  if (n <= 2) {
    return n;
  }
  // 可以通过 Map 缓存来降低复杂度
  return climbingStairs2(n - 1) + climbingStairs2(n - 2);
}

/**
 * 动态规划
 *
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param n {Number}
 * @returns {Number}
 */
export function climbingStairs(n: number): number {
  // f(n) = f(n - 1) + f(n - 2)
  let last = 0;
  let current = 0;
  let r = 1; // 初始值，n = 0 也为 1

  for (let i = 1; i <= n; i++) {
    last = current;
    current = r;
    r = last + current;
  }

  return r;
}
```