# 69. x 的平方根

> 难度：简单
>
> https://leetcode.cn/problems/sqrtx/

## 题目

给你一个非负整数 x ，计算并返回  x  的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x \*\* 0.5 。

**示例 1**

```
输入：x = 4
输出：2
```

**示例 2**

```
输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
```

## 解答

```typescript
/**
 * 二分查找
 * @desc 时间复杂度 O(logn) 空间复杂度 O(1)
 * @param x {number}
 * @returns {number}
 */
export function mySqrt(x: number): number {
  // 模版一 左闭右闭，相交终止
  // let l = 0, r = x;
  // while (l <= r) {
  //     const c = l + Math.floor((r - l) / 2);
  //     const square = c * c;
  //     if (square === x) {
  //         return c;
  //     } else if (square < x) {
  //         l = c + 1
  //     } else {
  //         r = c - 1;
  //     }
  // }

  // return r;

  // 模板二 相等终止
  // let l = 0, r = x + 1;
  // while(l < r) {
  //     const c = l + Math.floor((r - l)/ 2);
  //     const square = c * c;
  //     if (square === x) {
  //         return c;
  //     } else if (square < x) {
  //         l = c + 1;
  //     } else {
  //         r = c;
  //     }
  // }

  // return r - 1;

  // 模板三 相临终止
  let l = -1,
    r = x + 1;

  while (l + 1 < r) {
    const c = l + Math.floor((r - l) / 2);
    const square = c * c;
    if (square === x) {
      return c;
    } else if (square < x) {
      l = c;
    } else {
      r = c;
    }
  }

  return l;
}
```
