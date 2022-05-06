# 49. 字母异位词分组

> 难度：中等
>
> https://leetcode-cn.com/problems/group-anagrams/

## 题目

给你一个字符串数组，请你将 **字母异位词** 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

**示例 1**

```
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**示例 2**

```
输入: strs = [""]
输出: [[""]]
```

**示例 3**

```
输入: strs = ["a"]
输出: [["a"]]
```

**提示：**

- 1 <= strs.length <= 104
- 0 <= strs[i].length <= 100
- strs[i] 仅包含小写字母

## 解答

```typescript
/**
 * 排序
 * @desc 时间复杂度 O(nklogk) n 为 strs 长度，k 为最长单词长度 空间复杂度 O(nk)
 * @params strs {string[]}
 * @returns {string[][]}
 */
export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();
  for (const str of strs) {
    let array = Array.from(str);
    array.sort();
    let key = array.toString();
    let list = map.get(key) ? map.get(key) : [];
    list.push(str);
    map.set(key, list);
  }

  return Array.from(map.values());
}

/**
 * 计数
 * @desc 时间复杂度 O(nk) 空间复杂度 O(nk)
 * @params strs {string[]}
 * @returns {string[][]}
 */
export function groupAnagrams2(strs: string[]): string[][] {
  const map: any = new Object();
  for (const str of strs) {
    const count = new Array(26).fill(0);
    for (const char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    map[count] ? map[count].push(str) : (map[count] = [str]);
  }

  return Object.values(map);
}
```
