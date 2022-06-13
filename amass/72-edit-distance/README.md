# 72. 编辑距离

> 难度：困难
>
> https://leetcode.cn/problems/edit-distance/

## 题目

给你两个单词  word1 和  word2， 请返回将  word1  转换成  word2 所使用的最少操作数  。

你可以对一个单词进行如下三种操作：

- 插入一个字符
- 删除一个字符
- 替换一个字符

**示例  1**

```
输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
```

**示例  2**

```
输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
```

提示：

- 0 <= word1.length, word2.length <= 500
- word1 和 word2 由小写英文字母组成

## 解答

```typescript
/**
 * 动态规划
 * @desc 时间复杂度 O(nm) 空间复杂度 O(nm)
 * @param word1 {string}
 * @param word2 {string}
 * @returns {number}
 */
export function minDistance(word1: string, word2: string): number {
  const n = word1.length;
  const m = word2.length;
  const dp: number[][] = new Array(n + 1)
    .fill(0)
    .map(() => new Array(m + 1).fill(0));

  // base case 当另一个单词不存在，次数就是单词长度（删除操作）
  for (let i = 1; i <= n; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= m; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[n][m];
}
```
