# 473. 火柴拼正方形

> 难度：中等
>
> https://leetcode.cn/problems/matchsticks-to-square/

## 题目

你将得到一个整数数组 `matchsticks` ，其中 `matchsticks[i]` 是第 `i` 个火柴棒的长度。你要用 **所有的火柴棍** 拼成一个正方形。你 **不能折断** 任何一根火柴棒，但你可以把它们连在一起，而且每根火柴棒必须 **使用一次** 。

如果你能使这个正方形，则返回 `true` ，否则返回 `false` 。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/171438332-7c7e2f63-5efa-4005-98fa-04d546744bcc.png)

```
输入: matchsticks = [1,1,2,2,2]
输出: true
解释: 能拼成一个边长为2的正方形，每边两根火柴。
```

**示例 2**

```
输入: matchsticks = [3,3,3,3,4]
输出: false
解释: 不能用所有火柴拼成一个正方形。
```

提示:

- 1 <= matchsticks.length <= 15
- 1 <= matchsticks[i] <= 108

## 解答

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(4^n) 空间复杂度 O(n)
 * @param matchsticks {number[]}
 * @returns {boolean}
 */
export function makesquare(matchsticks: number[]): boolean {
  const sum = matchsticks.reduce((v, p) => v + p, 0);
  // 不能被 4 整除
  if (sum % 4 !== 0) return false;

  matchsticks.sort((a, b) => b - a);
  const edges = new Array(4).fill(0);
  let ans: boolean = false;
  const len = sum / 4;
  const backtrack = (index: number) => {
    if (index === matchsticks.length) {
      return true;
    }

    for (let i = 0; i < edges.length; i++) {
      edges[i] += matchsticks[index];
      if (edges[i] <= len && backtrack(index + 1)) {
        ans = true;
        return true;
      }
      edges[i] -= matchsticks[index];
    }
  };
  backtrack(0);

  return ans;
}
```
