# 416. 分割等和子集

> 难度：中等
>
> https://leetcode.cn/problems/partition-equal-subset-sum/

## 题目

给你一个 **只包含正整数** 的 **非空** 数组 `nums` 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

**示例 1**

```
输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
```

**示例 2**

```
输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
```

提示：

- 1 <= nums.length <= 200
- 1 <= nums[i] <= 100

## 解答

```typescript
/**
 * 动态规划
 * dp[i][j] 行(i)为 nums 列(j) 为 target(sum / 2)
 *             / dp[i - 1][j]
 * dp[i][j] = {  true,                   nums[i] === j
 *             \ dp[i - 1][j - nums[i]]  nums[i] < j
 * @desc 时间复杂度 O(nc) 空间复杂度 O(nc)
 * @param nums {number[]}
 * @returns {boolean}
 */
export function canPartition(nums: number[]): boolean {
  const n = nums.length;
  const sum: number = nums.reduce((v, p) => v + p, 0);
  if (sum % 2) {
    // 不能等分
    return false;
  }

  const target = sum / 2;
  const dp: boolean[][] = new Array(n)
    .fill(false)
    .map(() => new Array(target + 1));

  dp[0][nums[0]] = true;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j];

      if (nums[i] === j) {
        dp[i][j] = true;
        continue;
      }

      if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }
  }

  return dp[n - 1][target];
}

/**
 * 动态规划 - 空间优化
 * dp[i][j] 行(i)为 nums 列(j) 为 target(sum / 2)
 *             / dp[i - 1][j]
 * dp[i][j] = {  true,                   nums[i] === j
 *             \ dp[i - 1][j - nums[i]]  nums[i] < j
 * @desc 时间复杂度 O(nc) 空间复杂度 O(c)
 * @param nums {number[]}
 * @returns {boolean}
 */
export function canPartition2(nums: number[]): boolean {
  const n = nums.length;
  const sum: number = nums.reduce((v, p) => v + p, 0);
  if (sum % 2) {
    // 不能等分
    return false;
  }

  const target = sum / 2;
  const dp: boolean[] = new Array(target + 1).fill(false);

  dp[nums[0]] = true;

  for (let i = 1; i < n; i++) {
    for (let j = target; j >= 0; --j) {
      if (nums[i] === j) {
        dp[j] = true;
        continue;
      }

      if (nums[i] < j) {
        dp[j] = dp[j] || dp[j - nums[i]];
      }
    }
  }

  return dp[target];
}
```
