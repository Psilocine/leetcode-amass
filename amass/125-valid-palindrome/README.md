# 125. 验证回文串

> 难度：简单
>
> https://leetcode.cn/problems/valid-palindrome/

## 题目

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

**示例 1**

```
输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
```

**示例 2**

```
输入: "race a car"
输出: false
解释："raceacar" 不是回文串
```

提示：

- 1 <= s.length <= 2 \* 105
- 字符串 s 由 ASCII 字符组成

## 解答

```typescript
/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param s {string}
 * @returns {boolean}
 */
export function validPalindrome(s: string): boolean {
  s = s.replace(/[\W_]/g, "").toLocaleLowerCase();

  return isPalindrome(s);
}

function isPalindrome(s: string) {
  const n = s.length;
  for (let i = 0; i < n / 2; i++) {
    if (s.charAt(i) !== s.charAt(n - i - 1)) {
      return false;
    }
  }

  return true;
}
```
