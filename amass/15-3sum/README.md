# 15. 三数之和

> 难度：中等
>
> https://leetcode-cn.com/problems/3sum/

## 题目

给你一个包含 `n` 个整数的数组 `nums`，判断 `nums` 中是否存在三个元素 a，b，c，使得 a + b + c = 0? 请你找出所有和为 `0` 且不重复的三元组

**注意**：答案中不可以包含重复的三元组

**示例 1**

```
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
```

**示例 2**

```
输入：nums = []
输出：[]
```

**示例 3**

```
输入：nums = [0]
输出：[]
```

**提示：**

- 0 <= nums.length <= 3000
- -105 <= nums[i] <= 105

## 解答

```typescript
/**
 * 双指针
 * @desc 时间复杂度 O(n^2) 空间复杂度 O(1)
 * @param nums {numer[]}
 * @returns {number[][]}
 */
export function threeSum(nums: number[]): number[][] {
  const len = nums.length;
  if (nums.length < 3) return [];

  let ans = [];

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break; // 一定大于 0
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重

    let L = i + 1;
    let R = len - 1;

    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        ans.push(nums[i] + nums[L] + nums[R]);
        while (L < R && nums[L] === nums[L + 1]) L++;
        while (L < R && nums[R] === nums[R - 1]) R--;
        L++;
        R--;
      } else if (sum > 0) {
        R--;
      } else {
        L++;
      }
    }
  }
  return ans;
}
```
