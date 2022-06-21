# 7. 整数反转

> 难度：中等
>
> https://leetcode.cn/problems/reverse-integer/

## 题目

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围  [−2^31,  2^31 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。

**示例 1**

```
输入：x = 123
输出：321
```

**示例 2**

```
输入：x = -123
输出：-321
```

**示例 3**

```
输入：x = 120
输出：21
```

**示例 4**

```
输入：x = 0
输出：0
```

提示：

- -2^31 <= x <= 2^31 - 1

## 解答

```typescript
/**
 * 模拟反转
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param x {number}
 * @returns {number}
 */
export function reverse(x: number): number {
  let ans: number = parseInt(x.toString().split("").reverse().join(""));

  if (x < 0) {
    ans *= -1;
  }

  return ans > Math.pow(2, 31) - 1 || ans < -Math.pow(2, 31) ? 0 : ans;
}

/**
 * 数学
 * @desc 时间复杂度 O(logx) 空间复杂度 O(1)
 * @param x {number}
 * @returns {number}
 */
export function reverse2(x: number): number {
  let ans: number = 0;
  const max: number = Math.pow(2, 31) - 1;
  const min: number = -Math.pow(2, 31);
  while (x !== 0) {
    const digit = x % 10;
    x = ~~(x / 10);
    ans = ans * 10 + digit;
    if (ans < min || ans > max) {
      return 0;
    }
  }
  return ans;
}
```
