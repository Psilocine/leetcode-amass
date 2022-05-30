# 77. 组合

> 难度：中等
>
> https://leetcode.cn/problems/combinations/

## 题目

给定两个整数 `n` 和 `k`，返回范围 `[1, n]` 中所有可能的 `k` 个数的组合。

你可以按 **任何顺序** 返回答案。

**示例 1**

```
输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

**示例 2**

```
输入：n = 1, k = 1
输出：[[1]]
```

提示：

- 1 <= n <= 20
- 1 <= k <= n

## 解答

```typescript
/**
 * 回溯 dfs
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param n {number}
 * @param k {number}
 * @returns {number[][]}
 */
export function combine(n: number, k: number): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];

  const backtrack = (start) => {
    if (path.length === k) {
      ans.push(path.slice());
      return;
    }

    /**
     * 剪枝
     * 已选择个数 path.length
     * 还需要个数 k - path.length
     * 在集合 n 中至多要从该起始位置 n - (k - path.length) + 1 开始遍历
     * +1 因为包括起始位置
     */
    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtrack(i + 1);
      path.pop();
    }
  };

  backtrack(1);
  return ans;
}
```
