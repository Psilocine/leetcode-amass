# 9999.38. 字符串的排列

> 难度：中等
>
> https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/

## 题目

输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

**示例**

```
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
```

限制：

- 1 <= s 的长度 <= 8

## 解答

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(n * n!) 空间复杂度 O(n)
 * @param s{string}
 * @returns {string[]}
 */
function permutation(s: string): string[] {
  const ans: Set<string> = new Set();
  const used = {};

  const backtrack = (path) => {
    if (path.length === s.length) {
      ans.add(path);
      return;
    }

    for (let i = 0; i < s.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      backtrack(path + s[i]);
      used[i] = false;
    }
  };

  backtrack("");

  return [...ans];
}
```
