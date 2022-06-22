# 680. 验证回文字符串 Ⅱ

> 难度：简单
>
> https://leetcode.cn/problems/valid-palindrome-ii/

## 题目

给定一个非空字符串  s，最多删除一个字符。判断是否能成为回文字符串。

**示例 1**

```
输入: s = "aba"
输出: true
```

**示例 2**

```
输入: s = "abca"
输出: true
解释: 你可以删除c字符。
```

**示例 3**

```
输入: s = "abc"
输出: false
```

提示:

- 1 <= s.length <= 105
- s 由小写英文字母组成

## 解答

```typescript
/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param s {string}
 * @returns {boolean}
 */
export function validPalindrome(s: string): boolean {
  const n = s.length;

  let l = 0,
    r = n - 1;

  while (l < r && s.charAt(l) === s.charAt(r)) {
    l++;
    r--;
  }

  if (isPalindrome(s, l + 1, r)) {
    return true;
  }

  if (isPalindrome(s, l, r - 1)) {
    return true;
  }

  return false;
}

function isPalindrome(s: string, l: number, r: number) {
  while (l < r) {
    if (s.charAt(l) !== s.charAt(r)) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}
```
