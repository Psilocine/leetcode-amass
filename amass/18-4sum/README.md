# 18. 四数之和

> 难度：中等
>
> https://leetcode.cn/problems/4sum/

## 题目

给你一个由 `n` 个整数组成的数组  `nums` ，和一个目标值 `target` 。请你找出并返回满足下述全部条件且 **不重复** 的四元组  `[nums[a], nums[b], nums[c], nums[d]]`（若两个四元组元素一一对应，则认为两个四元组重复）：

- 0 <= a, b, c, d < n
- a、b、c 和 d 互不相同
- nums[a] + nums[b] + nums[c] + nums[d] == target

你可以按 **任意顺序** 返回答案 。

**示例 1**

```
输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```

**示例 2**

```
输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
```

提示：

- 1 <= nums.length <= 200
- -109 <= nums[i] <= 109
- -109 <= target <= 109

## 解答

```typescript
/**
 * 双指针 + 排序
 * @desc 时间复杂度 O(n ^ 3) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number[][]}
 */
export function fourSum(nums: number[], target: number): number[][] {
  // 排序
  nums.sort((a, b) => a - b);
  let ans: number[][] = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          ans.push([nums[i], nums[j], nums[left], nums[right]]);

          let k = right - 1;
          while (left < k && nums[k] === nums[right]) {
            k--;
          }
          right = k;

          k = left + 1;
          while (k < right && nums[k] === nums[left]) {
            k++;
          }
          left = k;
          continue;
        } else if (sum > target) {
          let k = right - 1;
          while (left < k && nums[k] === nums[right]) {
            k--;
          }
          right = k;
        } else {
          let k = left + 1;
          while (k < right && nums[k] === nums[left]) {
            k++;
          }
          left = k;
        }
      }
    }
  }

  return ans;
}
```
