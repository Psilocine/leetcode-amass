# 40. 组合总和 II

> 难度：中等
>
> https://leetcode.cn/problems/combination-sum-ii/

## 题目

给定一个候选人编号的集合  `candidates`  和一个目标数  `target` ，找出  `candidates`  中所有可以使数字和为  `target`  的组合。

`candidates`  中的每个数字在每个组合中只能使用  **一次** 。

注意：解集不能包含重复的组合。

**示例  1**

```
输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```

**示例  2**

```
输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]
```

提示:

- 1 <= candidates.length <= 100
- 1 <= candidates[i] <= 50
- 1 <= target <= 30

## 解答

```typescript
/**
 * 回溯 dfs
 * @desc 时间复杂度 O(n * 2^n) 空间复杂度 O(n)
 * @param candidates {number[]}
 * @param target {number}
 * @returns {number[][]}
 */
export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];
  candidates.sort((a, b) => a - b);

  const backtrack = (start: number, sum: number) => {
    if (sum >= target) {
      if (sum === target) {
        ans.push(path.slice());
      }
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) continue;
      if (i > start && candidates[i - 1] === candidates[i]) continue;
      path.push(candidates[i]);
      backtrack(i + 1, sum + candidates[i]);
      path.pop();
    }
  };

  backtrack(0, 0);

  return ans;
}
```
