# 46. 全排列

> 难度：中等
>
> https://leetcode-cn.com/problems/permutations/

## 题目

给定一个不含重复数字的数组 `nums` ，返回其所有可能的全排列。你可以 **按任意顺序** 返回答案。

**示例 1**

```
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

**示例 2**

```
输入：nums = [0,1]
输出：[[0,1],[1,0]]
```

**示例 3**

```
输入：nums = [1]
输出：[[1]]
```

**提示：**

- 1 <= nums.length <= 6
- -10 <= nums[i] <= 10
- nums 中的所有整数 互不相同

## 解答

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(n * n!) 空间复杂度 O(n) n 为序列的长度
 * @param nums {number[]}
 * @returns {numebr[][]}
 */
export function permute(nums: number[]): number[][] {
  const res = [];

  const dfs = (combine) => {
    if (combine.length === nums.length) {
      res.push(combine);
      return;
    }

    nums.forEach((v) => {
      if (!combine.includes(v)) {
        dfs([...combine, v]);
      }
    });
  };

  dfs([]);
  return res;
}
```
