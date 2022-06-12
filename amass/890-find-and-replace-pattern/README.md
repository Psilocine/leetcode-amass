# 890. 查找和替换模式

> 难度：中等
>
> https://leetcode.cn/problems/find-and-replace-pattern/

## 题目

你有一个单词列表  words  和一个模式   pattern，你想知道 words 中的哪些单词与模式匹配。

如果存在字母的排列 p ，使得将模式中的每个字母 x 替换为 p(x) 之后，我们就得到了所需的单词，那么单词与模式是匹配的。

（回想一下，字母的排列是从字母到字母的双射：每个字母映射到另一个字母，没有两个字母映射到同一个字母。）

返回 words 中与给定模式匹配的单词列表。

你可以按任何顺序返回答案。

**示例**

```
输入：words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
输出：["mee","aqq"]
解释：
"mee" 与模式匹配，因为存在排列 {a -> m, b -> e, ...}。
"ccc" 与模式不匹配，因为 {a -> c, b -> c, ...} 不是排列。
因为 a 和 b 映射到同一个字母。
```

提示：

- 1 <= words.length <= 50
- 1 <= pattern.length = words[i].length <= 20

## 解答

```typescript
/**
 * 模拟
 * 第一次出现的字母为 1 依次累加
 * eg. abb -> 122
 * @desc 时间复杂度 O(mn) 空间复杂度 O(m)
 * @param words {string[]}
 * @param pattern {string}
 * @returns {string[]}
 */
export function findAndReplacePattern(
  words: string[],
  pattern: string
): string[] {
  const tmpl = exchage(pattern);
  const ans: string[] = [];
  for (let i = 0; i < words.length; i++) {
    if (exchage(words[i]) === tmpl) {
      ans.push(words[i]);
    }
  }

  return ans;
}
// 把字母转换成数字
function exchage(words) {
  const map = new Map();

  let _id = 1;
  let ret: string = "";
  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      ret += map.get(words[i]);
    } else {
      map.set(words[i], _id++);
      ret += _id;
    }
  }

  return ret;
}
```
