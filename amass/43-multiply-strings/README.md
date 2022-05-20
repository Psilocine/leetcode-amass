# 43. 字符串相乘

> 难度：中等
>
> https://leetcode.cn/problems/multiply-strings/

## 题目

给定两个以字符串形式表示的非负整数  `num1`  和  `num2`，返回  `num1`  和  `num2`  的乘积，它们的乘积也表示为字符串形式。

注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

**示例 1**

```
输入: num1 = "2", num2 = "3"
输出: "6"
```

**示例  2**

```
输入: num1 = "123", num2 = "456"
输出: "56088"
```

提示：

- 1 <= num1.length, num2.length <= 200
- num1  和 num2  只能由数字组成。
- num1  和 num2  都不包含任何前导零，除了数字 0 本身。

## 解答

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(m * n) 空间复杂度 O(m + n)
 * @param num1 {string}
 * @param num2 {string}
 * @returns {string}
 */
export function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  const len1 = num1.length;
  const len2 = num2.length;
  const ans: number[] = new Array(len1 + len2 - 1).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      if (!ans[i + j]) {
        ans[i + j] = 0;
      }
      ans[i + j] += parseInt(num1[i]) * parseInt(num2[j]);
    }
  }
  let flag = 0;
  let temp = 0;
  for (let i = ans.length - 1; i >= 0; i--) {
    temp = ans[i] + flag;
    flag = Math.floor(temp / 10);
    ans[i] = temp % 10;
  }

  // 说明首位还有进位
  if (flag) {
    ans.unshift(flag);
  }

  return ans.join("");
}
```
