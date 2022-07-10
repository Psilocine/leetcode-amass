# 9999.05. 替换空格

> 难度：简单
>
> https://leetcode.cn/problems/ti-huan-kong-ge-lcof/

## 题目

请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

**示例 1**

```
输入：s = "We are happy."
输出："We%20are%20happy."
```

限制：

- 0 <= s 的长度 <= 10000

## 解答

```typescript
replace/replaceAll
split/join
/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param s {string}
 * @returns {string}
 */
export function replaceSpace(s: string): string {
  const arr = s.split("");

  // 计算空格数量
  let spaceCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") spaceCount++;
  }

  let l = arr.length - 1;
  let r = arr.length + spaceCount * 2 - 1;

  while (l >= 0) {
    if (arr[l] !== " ") {
      arr[r--] = arr[l--];
    } else {
      arr[r--] = "0";
      arr[r--] = "2";
      arr[r--] = "%";
      l--;
    }
  }

  return arr.join("");
}
```
