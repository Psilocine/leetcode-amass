# 567. 字符串的排列

> 难度：中等
>
> https://leetcode.cn/problems/permutation-in-string/

## 题目

给你两个字符串  s1  和  s2 ，写一个函数来判断 s2 是否包含 s1  的排列。如果是，返回 true ；否则，返回 false 。

换句话说，s1 的排列之一是 s2 的 子串 。

**示例 1**

```
输入：s1 = "ab" s2 = "eidbaooo"
输出：true
解释：s2 包含 s1 的排列之一 ("ba").
```

**示例 2**

```
输入：s1= "ab" s2 = "eidboaoo"
输出：false
```

提示：

- 1 <= s1.length, s2.length <= 10^4
- s1 和 s2 仅包含小写字母

## 解答

```typescript
/**
 * 滑动窗口
 * @desc 时间复杂度 O(n + m) 空间复杂度 O(1)
 * @param s1 {string}
 * @param s2 {string}
 * @returns {boolean}
 */
export function checkInclusion(s1: string, s2: string): boolean {
  const n = s1.length;
  const m = s2.length;
  if (n > m) {
    return false;
  }

  const cnt1 = new Array(26).fill(0);
  const cnt2 = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);
  for (let i = 0; i < n; i++) {
    ++cnt1[s1.charCodeAt(i) - aCode];
    ++cnt2[s2.charCodeAt(i) - aCode];
  }
  if (cnt1.toString() === cnt2.toString()) {
    return true;
  }

  for (let i = n; i < m; ++i) {
    ++cnt2[s2.charCodeAt(i) - aCode];
    --cnt2[s2.charCodeAt(i - n) - aCode];
    if (cnt1.toString() === cnt2.toString()) {
      return true;
    }
  }
  return false;
}
```
