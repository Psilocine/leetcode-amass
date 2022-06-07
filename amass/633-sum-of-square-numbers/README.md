# 633. 平方数之和

> 难度：中等
>
> https://leetcode.cn/problems/sum-of-square-numbers/

## 题目

给定一个非负整数 `c`，你要判断是否存在两个整数 `a` 和 `b`，使得  `a2 + b2 = c` 。

**示例 1**

```
输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5
```

**示例 2**

```
输入：c = 3
输出：false
```

提示：

- 0 <= c <= 2^31 - 1

## 解答

```typescript
/**
 * 双指针
 * @desc 时间复杂度 O(sqrtc) 空间复杂度 O(1)
 * @param c {number}
 * @returns {boolean}
 */
export function judgeSquareSum(c: number): boolean {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const res = left * left + right * right;
    if (res === c) {
      return true;
    } else if (res > c) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}
```
