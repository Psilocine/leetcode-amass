# 455. 分发饼干

> 难度：简单
>
> https://leetcode.cn/problems/assign-cookies/

## 题目

假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

对每个孩子 i，都有一个胃口值  g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

**示例  1**

```
输入: g = [1,2,3], s = [1,1]
输出: 1
解释:
你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
所以你应该输出1。
```

**示例  2**

```
输入: g = [1,2], s = [1,2,3]
输出: 2
解释:
你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
你拥有的饼干数量和尺寸都足以让所有孩子满足。
所以你应该输出2.
```

## 解答

```typescript
/**
 * 排序 + 贪心
 * @desc 时间复杂度 O(mlogm + nlogn) 空间复杂度 O(1)
 * @param g {number[]}
 * @param s {number[]}
 * @returns {number}
 */
export function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let ans: number = 0;
  let cookieIdx: number = 0;
  for (let i = 0; i < g.length; i++) {
    while (s[cookieIdx] < g[i]) {
      cookieIdx++;
    }

    if (cookieIdx === s.length) {
      break;
    }

    ans++;
    cookieIdx++;
  }

  return ans;
}
```
