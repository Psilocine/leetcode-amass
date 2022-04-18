# 338. 比特位计数

> 难度：简单
>
> https://leetcode-cn.com/problems/counting-bits/

## 题目

给你一个整数 `n` ，对于 `0 <= i <= n` 中的每个 `i` ，计算其二进制表示中 **`1` 的个数** ，返回一个长度为 `n + 1` 的数组 `ans` 作为答案。

**示例 1**

```
输入：n = 2
输出：[0,1,1]
解释：
0 --> 0
1 --> 1
2 --> 10
```

**示例 2**

```
输入：n = 5
输出：[0,1,1,2,1,2]
解释：
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
```

提示：

- `0 <= n <= 105`


**进阶**

很容易就能实现时间复杂度为 `O(n log n)` 的解决方案，你可以在线性时间复杂度 `O(n)` 内用一趟扫描解决此问题吗？
你能不使用任何内置函数解决此问题吗？（如，C++ 中的  `__builtin_popcount` ）

## 解答
```typescript
/**
 * Brian Kernighan 算法
 * 任意整数 x，令 x &= x - 1，将 x 的二进制最后一个 1 变成 0
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(1)
 * @param n {number}
 * @return {number[]}
 */
export function countBits(n: number): number[] {
  const res: number[] = [];

  for (let i = 0; i <= n; i++) {
    let sum = 0;
    let item = i;
    while (item !== 0) {
      item &= item - 1;
      sum++;
    }
    res.push(sum);
  }

  return res;
}

/**
 * 动态规划
 * 正整数 x 将其二进制表示右移一位，等价于将最低位去掉（100 -> 10）得到的数是 x/2
 * 如果 bits[x/2] 已知，则可以得到 bit[x] 的值
 * - x 是偶数，bits[x] = bits[x/2]
 * - x 是奇数，bits[x] = bits[x/2] + 1
 * 结合可得，bits[x] = bitx[x >> 1] + (x & 1)
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param n {number}
 * @return {number[]}
 */
export function countBits2(n: number): number[] {
  const bits: number[] = [0];

  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i >> 1] + (i & 1);
  }

  return bits;
}
```