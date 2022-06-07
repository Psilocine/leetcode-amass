# 16. 最接近的三数之和

> 难度：中等
>
> https://leetcode.cn/problems/3sum-closest/

## 题目

给你一个长度为 `n` 的整数数组  `nums`  和 一个目标值  `target`。请你从 nums 中选出三个整数，使它们的和与  `target`  最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

**示例 1**

```
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
```

**示例 2**

```
输入：nums = [0,0,0], target = 1
输出：0
```

提示：

- 3 <= nums.length <= 1000
- -1000 <= nums[i] <= 1000
- -10^4 <= target <= 10^4

## 解答

```typescript
/**
 * 双指针 + 排序
 * @desc  时间复杂度 O(n ^ 2) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number}
 */
export function threeSumClosest(nums: number[], target: number): number {
  // 排序
  nums.sort((a, b) => a - b);
  let ans: number = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return target;
      }

      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum;
      }

      if (sum > target) {
        let k = right - 1;
        while (left < k && nums[k] === nums[right]) {
          k--;
        }
        right = k;
      } else {
        let k = left + 1;
        while (k < right && nums[left] === nums[k]) {
          k++;
        }
        left = k;
      }
    }
  }
  return ans;
}
```
