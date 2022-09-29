# 01.09. 字符串轮转

> 难度：简单
>
> https://leetcode.cn/problems/string-rotation-lcci/

## 题目

字符串轮转。给定两个字符串 s1 和 s2，请编写代码检查 s2 是否为 s1 旋转而成（比如，waterbottle 是 erbottlewat 旋转后的字符串）。

**示例 1**

```
 输入：s1 = "waterbottle", s2 = "erbottlewat"
 输出：True
```

**示例 2**

```
 输入：s1 = "aa", s2 = "aba"
 输出：False
```

**提示**

字符串长度在[0, 100000]范围内。

**说明**

你能只调用一次检查子串的方法吗？

## 解答

```typescript
/**
 * 搜索子字符串
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s1 {string}
 * @param s2 {string}
 * @returns {boolean}
 */
export function isFlipedString(s1: string, s2: string): boolean {
  // const n = s1.length;
  // const m = s2.length;
  // if (n !== m) return false;

  // return `${s1}${s1}`.indexOf(s2) >= 0
  return s1.length === s2.length && (s1 + s1).indexOf(s2) !== -1;
}
```
