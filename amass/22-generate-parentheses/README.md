# 22. 括号生成

> 难度：中等
>
> https://leetcode-cn.com/problems/generate-parentheses/

## 题目

数学 `n` 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 **有效的** 括号组合。

**示例 1**

```
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
```

**示例 2**

```
输入：n = 1
输出：["()"]
```

**提示：**

- 1 <= n <= 8

## 解答

```typescript
/**
 * 哈希表
 * @desc 时间复杂度 O((4^n)/sqrt(n)) 卡特兰数 空间复杂度 O((4^n)/sqrt(n))
 * @param n {number}
 * @returns {string[]}
 */
export function generateParenthesis(n: number): string[] {
  let set = new Set(["()"]);

  for (let c = 2; c <= n; c++) {
    let nextSet: Set<string> = new Set();
    for (const s of set) {
      for (let j = 0; j <= s.length; j++) {
        nextSet.add(s.slice(0, j) + "()" + s.slice(j));
      }
    }
    set = nextSet;
  }

  return [...set];
}

/**
 * DFS
 * @desc 时间复杂度 O((4^n)/sqrt(n)) 卡特兰数 空间复杂度 O(n)
 * @param n {number}
 * @returns {string[]}
 */
export function generateParenthesis2(n: number): string[] {
  const res = [];

  const dfs = (open, close, str) => {
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }
    if (open > 0) {
      dfs(open - 1, close, str + "(");
    }
    if (open < close) {
      dfs(open, close - 1, str + ")");
    }
  };

  dfs(n, n, "");

  return res;
}
```
