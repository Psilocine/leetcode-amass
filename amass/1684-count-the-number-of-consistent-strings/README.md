# 1684. 统计一致字符串的数目

> 难度：简单
>
> https://leetcode.cn/problems/count-the-number-of-consistent-strings/description/

## 题目

给你一个由不同字符组成的字符串 allowed 和一个字符串数组 words 。如果一个字符串的每一个字符都在 allowed 中，就称这个字符串是 一致字符串 。

请你返回 words 数组中 一致字符串 的数目。

**示例 1**

```
输入：allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
输出：2
解释：字符串 "aaab" 和 "baa" 都是一致字符串，因为它们只包含字符 'a' 和 'b' 。
```

**示例 2**

```
输入：allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
输出：7
解释：所有字符串都是一致的。
```

**示例 3**

```
输入：allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
输出：4
解释：字符串 "cc"，"acd"，"ac" 和 "d" 是一致字符串。
```

提示：

- 1 <= words.length <= 104
- 1 <= allowed.length <= 26
- 1 <= words[i].length <= 10
- allowed 中的字符 互不相同 。
- words[i] 和 allowed 只包含小写英文字母。

## 解答

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param allowed {string}
 * @param words {string[]}
 * @returns {number}
 */
export function countConsistentStrings(
  allowed: string,
  words: string[]
): number {
  const map: boolean[] = new Array(26).fill(false);
  const aCode = "a".charCodeAt(0);
  let ans: number = 0;

  for (let i = 0; i < allowed.length; i++) {
    const itemCode = allowed.charCodeAt(i) - aCode;
    map[itemCode] = true;
  }

  for (let i = 0; i < words.length; i++) {
    const item = words[i];
    let flag = true;

    for (let j = 0; j < item.length; j++) {
      const itemCode = item.charCodeAt(j) - aCode;
      if (!map[itemCode]) {
        flag = false;
        break;
      }
    }

    if (flag) ans++;
  }

  return ans;
}
```
