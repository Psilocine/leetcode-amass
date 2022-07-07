# 93. 复原 IP 地址

> 难度：中等
>
> https://leetcode.cn/problems/restore-ip-addresses/

## 题目

有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

- 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入  '.' 来形成。你 不能   重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

**示例 1**

```
输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
```

**示例 2**

```
输入：s = "0000"
输出：["0.0.0.0"]
```

**示例 3**

```
输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
```

提示：

- 1 <= s.length <= 20
- s 仅由数字组成

## 解答

```typescript
/**
 * 回溯
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {string[]}
 */
export function restoreIpAddresses(s: string): string[] {
  const n = s.length;
  const ans: string[] = [];

  // 组成不了 ip
  if (n < 4 || n > 12) return ans;

  const backtrack = (subRes, start) => {
    if (subRes.length === 4 && start === s.length) {
      ans.push(subRes.join("."));
      return;
    }

    // 枚举出选择，三种切割长度
    for (let len = 1; len <= 3; len++) {
      // 加上要切的长度就越界，不能切这个长度
      if (start + len - 1 >= s.length) return;
      // 不能切出'0x'、'0xx'
      if (len !== 1 && s[start] === "0") return;

      const str = s.substring(start, start + len);
      if (len === 3 && +str > 255) return;

      subRes.push(str);
      backtrack(subRes, start + len);
      subRes.pop();
    }
  };

  backtrack([], 0);
  return ans;
}
```
