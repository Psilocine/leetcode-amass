# 593. 有效的正方形

> 难度：中等
>
> https://leetcode.cn/problems/valid-square/

## 题目

给定 2D 空间中四个点的坐标  p1, p2, p3  和  p4，如果这四个点构成一个正方形，则返回 true 。

点的坐标  pi 表示为 [xi, yi] 。输入 不是 按任何顺序给出的。

一个 有效的正方形 有四条等边和四个等角(90 度角)。

**示例 1**

```
输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
输出: True
```

**示例 2**

```
输入：p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
输出：false
```

**示例 3**

```
输入：p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
输出：true
```

提示:

- p1.length == p2.length == p3.length == p4.length == 2
- -10^4 <= xi, yi <= 10^4

## 解答

```typescript
/**
 * 模拟
 * 从给定的 4 个定点选 3 个定点，检查能否形成直角三角形
 * @desc 时间复杂度 O(1) 空间复杂度 O(1)
 * @param a {number[]}
 * @param b {number[]}
 * @param c {number[]}
 * @param d {number[]}
 * @return {boolean}
 */
export function validSquare(
  a: number[],
  b: number[],
  c: number[],
  d: number[]
): boolean {
  let len = -1;

  const calc = (a: number[], b: number[], c: number[]): boolean => {
    const l1 = (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
    const l2 = (a[0] - c[0]) ** 2 + (a[1] - c[1]) ** 2;
    const l3 = (b[0] - c[0]) ** 2 + (b[1] - c[1]) ** 2;
    const ok =
      (l1 == l2 && l1 + l2 == l3) ||
      (l1 == l3 && l1 + l3 == l2) ||
      (l2 == l3 && l2 + l3 == l1);
    if (!ok) return false;
    if (len == -1) len = Math.min(l1, l2);
    else if (len == 0 || len != Math.min(l1, l2)) return false;
    return true;
  };

  return calc(a, b, c) && calc(a, b, d) && calc(a, c, d) && calc(b, c, d);
}
```
