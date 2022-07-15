# 58. 最后一个单词的长度

> 难度：简单
>
> https://leetcode.cn/problems/length-of-last-word/

## 题目

给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

**示例 1**

```
输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为5。
```

**示例 2**

```
输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为4。
```

**示例 3**

```
输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为6的“joyboy”。
```

提示：

- 1 <= s.length <= 10^4
- s 仅有英文字母和空格 ' ' 组成
- s 中至少存在一个单词

## 解答

```typescript
/**
 * split 反向遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {number}
 */
export function lengthOfLastWord(s: string): number {
  s = s.trim();
  const words = s.split(" ");
  return words[words.length - 1].length;
}

/**
 * 模拟 反向遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {number}
 */
export function lengthOfLastWord2(s: string): number {
  let index = s.length - 1;
  while (s[index] === " ") {
    index--;
  }
  let len = 0;
  while (index >= 0 && s[index] !== " ") {
    len++;
    index--;
  }

  return len;
}
```
