# 856. 括号的分数

> 难度：中等
>
> https://leetcode.cn/problems/score-of-parentheses/

## 题目

给定一个平衡括号字符串  S，按下述规则计算该字符串的分数：

- () 得 1 分。
- AB 得  A + B  分，其中 A 和 B 是平衡括号字符串。
- (A) 得  2 \* A  分，其中 A 是平衡括号字符串。

**示例 1**

```
输入： "()"
输出： 1
```

**示例 2**

```
输入： "(())"
输出： 2
```

**示例  3**

```
输入： "()()"
输出： 2
```

**示例  4**

```
输入： "(()(()))"
输出： 6
```

提示：

- S  是平衡括号字符串，且只含有  (  和  ) 。
- 2 <= S.length <= 50

## 解答

```typescript
/**
 * 栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {number}
 */
export function scoreOfParentheses(s: string): number {
  const stack: number[] = [0];
  for (let ch of s) {
    if (ch === "(") {
      stack.push(0);
    } else {
      const val: number = stack.pop();
      const cnt: number = stack.pop() + Math.max(2 * val, 1);
      stack.push(cnt);
    }
  }
  return stack.pop();
}
```
