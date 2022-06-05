# 478. 在圆内随机生成点

> 难度：中等
>
> https://leetcode.cn/problems/generate-random-point-in-a-circle/

## 题目

给定圆的半径和圆心的位置，实现函数 `randPoint` ，在圆中产生均匀随机点。

实现  `Solution`  类:

- `Solution(double radius, double x_center, double y_center)`  用圆的半径  `radius`  和圆心的位置 `(x_center, y_center)` 初始化对象
- `randPoint()`  返回圆内的一个随机点。圆周上的一点被认为在圆内。答案作为数组返回 `[x, y]` 。

**示例 1**

```
输入:
["Solution","randPoint","randPoint","randPoint"]
[[1.0, 0.0, 0.0], [], [], []]
输出: [null, [-0.02493, -0.38077], [0.82314, 0.38945], [0.36572, 0.17248]]
解释:
Solution solution = new Solution(1.0, 0.0, 0.0);
solution.randPoint ();//返回[-0.02493，-0.38077]
solution.randPoint ();//返回[0.82314,0.38945]
solution.randPoint ();//返回[0.36572,0.17248]
```

提示：

- 0 < radius <= 108
- -107 <= x_center, y_center <= 107
- randPoint 最多被调用  3 \* 104  次

## 解答

```typescript
/**
 * 拒绝采样
 * @desc 时间复杂度 O(1) 空间复杂度 O(1)
 */
export class Solution {
  private xc: number;
  private yc: number;
  private r: number;
  constructor(radius: number, x_center: number, y_center: number) {
    this.xc = x_center;
    this.yc = y_center;
    this.r = radius;
  }

  randPoint(): number[] {
    while (true) {
      const x = Math.random() * (2 * this.r) - this.r;
      const y = Math.random() * (2 * this.r) - this.r;
      if (x * x + y * y <= this.r * this.r) {
        return [this.xc + x, this.yc + y];
      }
    }
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
```
