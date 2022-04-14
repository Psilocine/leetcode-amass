# 20. 有效的括号

> 难度：简单
>
> https://leetcode-cn.com/problems/valid-parentheses/

## 题目

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'`  的字符串 `s` ，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

**示例 1**

```
输入：s = "()"
输出：true
```

**示例  2**

```
输入：s = "()[]{}"
输出：true
```

**示例  3**

```
输入：s = "(]"
输出：false
```

**示例  4**

```
输入：s = "([)]"
输出：false
```

**示例  5**

```
输入：s = "{[]}"
输出：true
```

## 解法

```typescript
/**
 * 栈 先入后出
 *
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {String}
 * @return {Boolean}
 */
export function validParentheses(s: string): boolean {
  if (s.length === 0) return true;
  if (s.length % 2 === 1) return false;

  const map: Map<string, string> = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (!map.get(s[i])) {
      stack.push(s[i]);
    } else if (stack.pop() !== map.get(s[i])) {
      return false;
    }
  }

  return !stack.length;
}
```
