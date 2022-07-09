# 873. 最长的斐波那契子序列的长度

> 难度：中等
>
> https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence/

## 题目

如果序列  X_1, X_2, ..., X_n  满足下列条件，就说它是   斐波那契式   的：

- n >= 3
- 对于所有  i + 2 <= n，都有  X*i + X*{i+1} = X\_{i+2}
  给定一个严格递增的正整数数组形成序列 arr ，找到 arr  中最长的斐波那契式的子序列的长度。如果一个不存在，返回   0 。

（回想一下，子序列是从原序列 arr  中派生出来的，它从 arr  中删掉任意数量的元素（也可以不删），而不改变其余元素的顺序。例如， [3, 5, 8]  是  [3, 4, 5, 6, 7, 8]  的一个子序列）

**示例 1**

```
输入: arr = [1,2,3,4,5,6,7,8]
输出: 5
解释: 最长的斐波那契式子序列为 [1,2,3,5,8] 。
```

**示例  2**

```
输入: arr = [1,3,7,11,12,14,18]
输出: 3
解释: 最长的斐波那契式子序列有 [1,11,12]、[3,11,14] 以及 [7,11,18] 。
```

提示：

- 3 <= arr.length <= 1000
- 1 <= arr[i] < arr[i + 1] <= 10^9

## 解答

```typescript
/**
 * 哈希表 + 遍历
 * 枚举前两项
 * @desc 时间复杂度 O(n^3) 空间复杂度 O(n)
 * @param arr {number[]}
 * @returns {number}
 */
export function lenLongestFibSubseq(arr: number[]): number {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], arr[i]);
  }
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let pre = arr[i];
      let cur = arr[j];
      let count = 2;
      while (map.has(pre + cur)) {
        count++;
        let temp = map.get(pre + cur);
        pre = cur;
        cur = temp;
      }

      if (count >= 3) {
        ans = Math.max(ans, count);
      }
    }
  }
  return ans;
}

/**
 * 记忆化搜索
 * memo
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(n^2)
 * @param arr {number[]}
 * @returns {number}
 */
export function lenLongestFibSubseq2(arr: number[]): number {
  const map = new Map();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    map.set(arr[i], i);
  }
  let ans = 0;
  let memo = new Array(n).fill(0).map(() => new Array(n).fill(-666));
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let count = dfs(map, i, j, memo, arr);

      if (count >= 3) {
        ans = Math.max(ans, count);
      }
    }
  }
  return ans;
}

function dfs(map, i, j, memo, arr): number {
  if (memo[i][j] !== -666) {
    return memo[i][j];
  }
  memo[i][j] = 2;
  let key = arr[i] + arr[j];
  if (map.has(key)) {
    memo[i][j] = 1 + dfs(map, j, map.get(key), memo, arr);
  }

  return memo[i][j];
}

/**
 * 动态规划
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(n^2)
 * @param arr {number[]}
 * @returns {number}
 */
export function lenLongestFibSubseq3(arr: number[]): number {
  const map = new Map();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    map.set(arr[i], i);
  }
  let ans = 0;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(2));

  // 从后向前遍历
  for (let i = 0; i < n; i++) {
    for (let j = i - 1; j >= 0 && arr[j] * 2 > arr[i]; j--) {
      if (map.has(arr[i] - arr[j])) {
        let k = map.get(arr[i] - arr[j]);
        dp[j][i] = dp[k][j] + 1;
      }
      ans = Math.max(ans, dp[j][i]);
    }
  }
  return ans >= 3 ? ans : 0;
}
```
