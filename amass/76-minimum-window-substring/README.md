# 76. 最小覆盖子串

> 难度：困难
>
> https://leetcode.cn/problems/minimum-window-substring/

## 题目

给你一个字符串 `s` 、一个字符串 `t` 。返回 `s` 中涵盖 `t` 所有字符的最小子串。如果 `s` 中不存在涵盖 `t` 所有字符的子串，则返回空字符串 `""` 。

注意：

- 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
- 如果 s 中存在这样的子串，我们保证它是唯一的答案。

**示例 1**

``` 
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
```

**示例 2**

```
输入：s = "a", t = "a"
输出："a"
```

**示例 3**

```
输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。
```

提示：

- 1 <= s.length, t.length <= 105
- s 和 t 由英文字母组成

进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？

## 解答

```typescript
/**
 * 滑动窗口 + 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(1) 哈希表最多用到 26 个小写英文字母
 * @param s {string}
 * @param t {string}
 * @returns {string}
 */
export function minWindow(s: string, t: string): string {
  const window: Map<string, number> = new Map();
  const need: Map<string, number> = new Map();

  // 确定窗口内部的条件
  for (const c of t) {
    if (!need.has(c)) {
      need.set(c, 0);
    }
    if (!window.has(c)) {
      window.set(c, 0);
    }
    need.set(c, need.get(c) + 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0;
  let start = 0;
  let end = Infinity;
  while (right < s.length) {
    const c = s[right];
    // 扩大窗口
    right++;

    // 处理滑动窗口数据更新
    if (need.has(c)) {
      window.set(c, window.get(c) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    while (valid === need.size) {
      if (right - left < end - start) {
        start = left;
        end = right;
      }
      const d = s[left];
      // 缩小窗口
      left++;

      // 处理滑动窗口数据更新
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }

  return end === Infinity ? "" : s.substring(start, end);
}
```
