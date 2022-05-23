# 42. 接雨水

> 难度：困难
>
> https://leetcode.cn/problems/trapping-rain-water/

## 题目

给定 `n` 个非负整数表示每个宽度为 `1` 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/169772279-8abf8f9f-bfde-4d6e-9831-3358ed042c4c.png)

```
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
```

**示例 2**

```

输入：height = [4,2,0,3,2,5]
输出：9
```

提示：

- n == height.length
- 1 <= n <= 2 \* 104
- 0 <= height[i] <= 105

## 解答

```typescript
/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param height {number[]}
 * @returns {number}
 */
export function trap(height: number[]): number {
  let ans = 0;
  let l = 0;
  let r = height.length - 1;
  let lMax = 0;
  let rMax = 0;

  while (l < r) {
    lMax = Math.max(lMax, height[l]);
    rMax = Math.max(rMax, height[r]);
    if (lMax < rMax) {
      ans += lMax - height[l];
      l++;
    } else {
      ans += rMax - height[r];
      r--;
    }
  }

  return ans;
}
```
