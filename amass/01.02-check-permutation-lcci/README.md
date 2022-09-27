# 01.02. 判定是否互为字符重排

> 难度：简单
>
> https://leetcode.cn/problems/check-permutation-lcci/

## 题目

给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

**示例 1**

```
输入: s1 = "abc", s2 = "bca"
输出: true
```

**示例 2**

```
输入: s1 = "abc", s2 = "bad"
输出: false
```

说明：

- 0 <= len(s1) <= 100
- 0 <= len(s2) <= 100

## 解答

```typescript
/**
 * 排序
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param s1 {string}
 * @param s2 {string}
 * @returns {boolean}
 */
export function CheckPermutation(s1: string, s2: string): boolean {
  return (
    s1.length === s2.length &&
    [...s1].sort().join("") === [...s2].sort().join("")
  );
}

/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s1 {string}
 * @param s2 {string}
 * @returns {boolean}
 */
export function CheckPermutation2(s1: string, s2: string): boolean {
  const n = s1.length;
  const m = s2.length;
  if (n !== m) return false;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const item = s1.charAt(i);
    map.set(item, (map.get(item) || 0) + 1);
  }

  for (let i = 0; i < m; i++) {
    const item = s2.charAt(i);
    map.set(item, (map.get(item) || 0) - 1);

    if (map.get(item) < 0) return false;
  }

  return true;
}
```
