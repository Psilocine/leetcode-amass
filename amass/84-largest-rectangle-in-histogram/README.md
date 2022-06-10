# 84. 柱状图中最大的矩形

> 难度：困难
>
> https://leetcode.cn/problems/largest-rectangle-in-histogram/

## 题目

给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/173035334-7cec9ea0-abdd-44c4-b245-5d45f4da47d5.png)

```
输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/173035339-a201f932-3bca-44c2-9aa4-a20eaea4b53f.png)

```
输入： heights = [2,4]
输出： 4
```

## 解答

```typescript
/**
 * 单调栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param heights {number[]}
 * @returns {number}
 */
export function largestRectangleArea(heights: number[]): number {
  const stack = [];
  heights = [-1, ...heights, -1];
  let area: number = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const idx = stack.pop();
      area = Math.max(area, heights[idx] * (i - stack[stack.length - 1] - 1));
    }

    stack.push(i);
  }

  return area;
}
```
