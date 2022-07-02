# 6. Z 字形变换

> 难度：中等
>
> https://leetcode.cn/problems/zigzag-conversion/

## 题目

将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行  Z 字形排列。

比如输入字符串为 "PAYPALISHIRING"  行数为 3 时，排列如下：

P A H N
A P L S I I G
Y I R

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);

**示例 1**

```
输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
```

**示例 2**

```
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
```

**示例 3**

```
输入：s = "A", numRows = 1
输出："A"
```

## 解答

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @param numRows {number}
 * @returns {string}
 */
export function convert(s: string, numRows: number): string {
  if (numRows < 2) return s;
  let j = 0,
    flag = -1;

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push([]);
  }

  for (let i = 0; i < s.length; i++) {
    rows[j].push(s.charAt(i));
    if (j == 0 || j == numRows - 1) flag = -flag;
    j += flag;
  }

  let res = "";

  for (let i = 0; i < rows.length; i++) {
    res += rows[i].toString();
  }

  return res.split(",").join("");
}
```
