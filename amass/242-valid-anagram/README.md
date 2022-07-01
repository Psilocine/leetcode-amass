# 242. 有效的字母异位词

> 难度：简单
>
> https://leetcode.cn/problems/valid-anagram/

## 题目

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若  s 和 t  中每个字符出现的次数都相同，则称  s 和 t  互为字母异位词。

**示例  1**

```
输入: s = "anagram", t = "nagaram"
输出: true
```

**示例 2**

```
输入: s = "rat", t = "car"
输出: false
```

提示:

- 1 <= s.length, t.length <= 5 \* 104
- s 和 t  仅包含小写字母



进阶:  如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

## 解答

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(n)空间复杂度 O(n)
 * @param s {string}
 * @param t {string}
 * @returns {boolean}
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let ans: boolean = false;

  const map = new Map();

  const map2 = new Map();

  for (let i = 0; i < s.length; i++) {
    const sCh = s.charAt(i);
    map.set(sCh, (map.get(sCh) || 0) + 1);
  }

  let valid = 0;

  for (let i = 0; i < t.length; i++) {
    const tCh = t.charAt(i);
    map2.set(tCh, (map2.get(tCh) || 0) + 1);
    if (map.get(tCh) === map2.get(tCh)) {
      valid++;
    }
  }

  return valid === map.size;
}
```
