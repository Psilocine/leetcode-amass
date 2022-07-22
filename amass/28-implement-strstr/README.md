# 28. 实现 strStr()

> 难度：简单
>
> https://leetcode.cn/problems/implement-strstr/

## 题目

实现  strStr()  函数。

给你两个字符串  haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回   -1 。

说明：

当  needle  是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当  needle  是空字符串时我们应当返回 0 。这与 C 语言的  strstr()  以及 Java 的  indexOf()  定义相符。

**示例 1**

```
输入：haystack = "hello", needle = "ll"
输出：2
```

**示例 2**

```
输入：haystack = "aaaaa", needle = "bba"
输出：-1
```

提示：

- 1 <= haystack.length, needle.length <= 10^4
- haystack 和 needle 仅由小写英文字符组成

## 解答

```typescript
/**
 * 暴力破解
 * @desc 时间复杂度 O(n * m) 空间复杂度 O(1)
 * @param haystack {string}
 * @param needle {string}
 * @returns {number}
 */
export function strStr(haystack: string, needle: string): number {
  const n = haystack.length;
  const m = needle.length;
  for (let i = 0; i + m <= n; i++) {
    let flag = true;
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
}

/**
 * KMP 算法 TODO
 * @desc 时间复杂度 O(n + m) 空间复杂度 O(m)
 * @param haystack {string}
 * @param needle {string}
 * @returns {number}
 */
export function strStr2(haystack: string, needle: string): number {
  const n = haystack.length;
  const m = needle.length;
  if (m === 0) {
    return 0;
  }

  const pi = new Array(m).fill(0);

  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = pi[j - 1];
    }
    if (needle[i] === needle[j]) {
      j++;
    }
    pi[i] = j;
  }

  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = pi[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === m) {
      return i - m + 1;
    }
  }

  return -1;
}
```
