# 45. 跳跃游戏 II

> 难度：中等
>
> https://leetcode.cn/problems/jump-game-ii/

## 题目

给你一个非负整数数组  nums ，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

假设你总是可以到达数组的最后一个位置。

**示例 1**

```
输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
```

**示例 2**

```
输入: nums = [2,3,0,1,4]
输出: 2
```

## 解答

```typescript
/**
 * 贪心
 * 每次找到可到达的最远位置
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function jump(nums: number[]): number {
  const n = nums.length;
  let ans = 0;

  let steps = 0;
  let maxPos = 0;

  for (let i = 0; i < n - 1; i++) {
    maxPos = Math.max(maxPos, nums[i] + i);

    if (steps === i) {
      steps = maxPos;
      ans++;
    }
  }

  return ans;
}
```
