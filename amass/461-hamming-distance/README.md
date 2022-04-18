# 461. 汉明距离

> 难度：简单
>
> https://leetcode-cn.com/problems/hamming-distance/

## 题目

两个整数之间的 `汉明距离` 指的是这两个数字对应二进制位不同的位置的数目。

给你两个整数 `x` 和 `y`，计算并返回它们之间的汉明距离。

**示例 1**

```
输入：x = 1, y = 4
输出：2
解释：
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。
```

**示例 2**

```
输入：x = 3, y = 1
输出：1
```

## 解答
```typescript
/**
 * 位运算
 * 两个数异或后的值每次右移一位，如果最低位是1，则令计数器加一
 * @desc 时间复杂度 O(logC) C 是元素数据范围，本题为 31 空间复杂度 O(1)
 * @param x {number}
 * @param y {number}
 * @return {number}
 */
export function hammingDistance(x: number, y: number): number {
  let target: number = x ^ y;
  let sum = 0;
  while (target) {
    sum += target & 1;
    target >>= 1
  }
  return sum;
};

/**
 * Brian Kernighan 算法
 * 
 * @desc 时间复杂度 O(logC) C 是元素数据范围，本题为 31 空间复杂度 O(1)
 * @param x {number}
 * @param y {number}
 * @return {number}
 */
export function hammingDistance2(x: number, y: number): number {
  let target: number = x ^ y;
  let sum = 0;
  while (target !== 0) {
    target &= target - 1;
    sum++;
  }
  return sum;
};
```