# 541. 反转字符串 II

> 难度：简单
>
> https://leetcode.cn/problems/reverse-string-ii/

## 题目

给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

- 如果剩余字符少于 k 个，则将剩余字符全部反转。
- 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

**示例 1**

```
输入：s = "abcdefg", k = 2
输出："bacdfeg"
```

**示例 2**

```
输入：s = "abcd", k = 2
输出："bacd"
```

## 解答

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @param k {number}
 * @returns {string}
 */
export function reverseStr(s: string, k: number): string {
  const n = s.length;
  const arr = Array.from(s);
  for (let i = 0; i < n; i += 2 * k) {
    // 剩余字符小于 2k 但大于等于 k 个，反转前 k 个字符
    if (i + k <= n) {
      reverse(arr, i, i + k - 1);
      continue;
    }
    // 剩余字符少于 k 个 全部反转
    reverse(arr, i, n - 1);
  }
  return arr.join("");
}

function reverse(arr: string[], left: number, right: number): void {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
```
