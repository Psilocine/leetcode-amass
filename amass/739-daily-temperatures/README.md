# 739. 每日温度

> 难度：中等
>
> https://leetcode.cn/problems/daily-temperatures/

## 题目

给定一个整数数组 `temperatures` ，表示每天的温度，返回一个数组 `answer`，其中 `answer[i]` 是指在第 `i` 天之后，才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 `0` 来代替。

**示例 1**

```
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
```

**示例 2**

```
输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]
```

**示例 3**

```
输入: temperatures = [30,60,90]
输出: [1,1,0]
```

提示：

- 1 <= temperatures.length <= 105
- 30 <= temperatures[i] <= 100

## 解答

```typescript
/**
 * 暴力破解
 * @desc 时间复杂度 O(nm) 空间复杂度 O(1)
 * @param temperatures {number[]}
 * @returns {number[]}
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const ans: number[] = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length - 1; i++) {
    let num: number = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
      num++;
      if (temperatures[i] < temperatures[j]) {
        ans[i] = num;
        break;
      }
    }
  }

  return ans;
}

/**
 * 单调栈
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param temperatures {number[]}
 * @returns {number[]}
 */
export function dailyTemperatures2(temperatures: number[]): number[] {
  const ans: number[] = new Array(temperatures.length).fill(0);

  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];
    // 和栈顶的值比较
    while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
      let prevIndex = stack.pop();
      ans[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }
  return ans;
}
```
