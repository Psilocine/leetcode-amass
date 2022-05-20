# 415. 字符串相加

> 难度：简单
>
> https://leetcode.cn/problems/add-strings/

## 题目

给定两个字符串形式的非负整数  `num1` 和 `num2` ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 `BigInteger` ），也不能直接将输入的字符串转换为整数形式。

**示例 1**

```
输入：num1 = "11", num2 = "123"
输出："134"
```

**示例 2**

```
输入：num1 = "456", num2 = "77"
输出："533"
```

**示例 3**

```

输入：num1 = "0", num2 = "0"
输出："0"
```

提示：

- 1 <= num1.length, num2.length <= 104
- num1 和 num2 都只包含数字  0-9
- num1 和 num2 都不包含任何前导零

## 解答

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(max(m, n)) 空间复杂度 O(1)
 * @param num1 {string}
 * @param num2 {string}
 * @returns {string}
 */
export function addString(num1: string, num2: string): string {
  const n = Math.max(num1.length, num2.length);
  // 补0
  num1 = num1.padStart(n, "0");
  num2 = num2.padStart(n, "0");

  let flag = 0;
  let temp = 0;
  let ans = "";

  for (let i = n - 1; i >= 0; --i) {
    temp = parseInt(num1[i]) + parseInt(num2[i]) + flag;
    flag = Math.floor(temp / 10);
    ans = (temp % 10) + ans;
  }

  if (flag > 0) {
    ans = 1 + ans;
  }

  return ans;
}
```
