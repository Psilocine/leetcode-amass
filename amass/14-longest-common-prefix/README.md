# 14. 最长公共前缀

> 难度：简单
>
> https://leetcode.cn/problems/longest-common-prefix/

## 题目

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串  ""。

**示例 1**

```
输入：strs = ["flower","flow","flight"]
输出："fl"
```

**示例 2**

```
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

提示：

- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] 仅由小写英文字母组成

## 解答

```typescript
/**
 * 纵向扫描
 * @desc 时间复杂度 O(mn) 空间复杂度 O(1)
 * @param strs {string[]}
 * @returns {string}
 */
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
  let ans: string = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) {
        return ans;
      }
    }
    ans += strs[0][i];
  }

  return ans;
}
```
