# 17.11. 面试题 17.11. 单词距离

> 难度：中等
>
> https://leetcode.cn/problems/find-closest-lcci/

## 题目

有个内含单词的超大文本文件，给定任意两个 **不同** 的单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?

**示例**

```
输入：words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
输出：1
```

提示：

- words.length <= 100000

## 解答

```typescript
/**
 * 一次遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param words {string[]}
 * @param word1 {string}
 * @param word2 {string}
 * @returns {number}
 */
export function findClosest(
  words: string[],
  word1: string,
  word2: string
): number {
  let q = -1;
  let p = -1;
  let ans = Infinity;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      q = i;
    } else if (words[i] === word2) {
      p = i;
    }

    if (p !== -1 && q !== -1) {
      ans = Math.min(ans, Math.abs(p - q));
    }
  }
  return ans;
}
```
