# 532. 数组中的 k-diff 数对

> 难度：中等
>
> https://leetcode.cn/problems/k-diff-pairs-in-an-array/

## 题目

给你一个整数数组  nums 和一个整数  k，请你在数组中找出 不同的  k-diff 数对，并返回不同的 k-diff 数对 的数目。

k-diff  数对定义为一个整数对 (nums[i], nums[j]) ，并满足下述全部条件：

- 0 <= i, j < nums.length
- i != j
- nums[i] - nums[j] == k

注意，|val| 表示 val 的绝对值。

**示例 1**

```
输入：nums = [3, 1, 4, 1, 5], k = 2
输出：2
解释：数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
尽管数组中有两个 1 ，但我们只应返回不同的数对的数量。
```

**示例 2**

```
输入：nums = [1, 2, 3, 4, 5], k = 1
输出：4
解释：数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5) 。
```

**示例 3**

```
输入：nums = [1, 3, 1, 5, 4], k = 0
输出：1
解释：数组中只有一个 0-diff 数对，(1, 1) 。
```

## 解答

```typescript
/**
 * 排序 + 二分
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @param k {number}
 * @returns {number}
 */
export function findPairs(nums: number[], k: number): number {
  let ans: number = 0;
  const n: number = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i++) {
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 设置左右指针
    let l = i + 1,
      r = n - 1;
    while (l <= r) {
      const c = l + Math.floor((r - l) / 2);

      const ret = nums[c] - nums[i];
      if (ret === k) {
        ans++;
        break;
      } else if (ret < k) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
  }

  return ans;
}
```
