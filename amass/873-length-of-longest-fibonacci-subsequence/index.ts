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
