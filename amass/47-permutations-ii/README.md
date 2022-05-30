# 47. 全排列 II

> 难度：中等
>
> https://leetcode.cn/problems/permutations-ii/

## 题目

给定一个可包含重复数字的序列 `nums` ，**按任意顺序** 返回所有不重复的全排列。

**示例 1**

```
输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
```

**示例 2**

```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

提示：

- 1 <= nums.length <= 8
- -10 <= nums[i] <= 10

## 解答

```typescript
/**
 * 回溯 dfs
 * @desc 时间复杂度 O(n * n!) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number[][]}
 */
export function permuteUnique(nums: number[]): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];
  const used = {};

  nums.sort((a, b) => a - b);

  const backtrack = () => {
    if (path.length === nums.length) {
      ans.push(path.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) {
        continue;
      }

      path.push(nums[i]);
      used[i] = true;
      backtrack();
      path.pop();
      used[i] = false;
    }
  };

  backtrack();

  return ans;
}
```
