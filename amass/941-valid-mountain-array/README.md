# 941. 有效的山脉数组

> 难度：简单
>
> https://leetcode.cn/problems/valid-mountain-array/

## 题目

给定一个整数数组 arr，如果它是有效的山脉数组就返回  true，否则返回 false。

让我们回顾一下，如果 arr  满足下述条件，那么它是一个山脉数组：

- arr.length >= 3
- 在  0 < i < arr.length - 1  条件下，存在  i  使得：
  - arr[0] < arr[1] < ... arr[i-1] < arr[i]
  - arr[i] > arr[i+1] > ... > arr[arr.length - 1]

![image](https://user-images.githubusercontent.com/25545052/177488207-899b9128-a3ac-41f8-af01-8a42c310fdd3.png)

**示例 1**

```
输入：arr = [2,1]
输出：false
```

**示例 2**

```
输入：arr = [3,5,5]
输出：false
```

**示例 3**

```
输入：arr = [0,3,2,1]
输出：true
```

## 解答

```typescript
/**
 * 双指针 + 一次遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param arr {number[]}
 * @returns {boolean}
 */
export function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false;
  const n = arr.length;
  let l = 0,
    r = n - 1;

  while (l < n && arr[l] < arr[l + 1]) l++;

  while (r > 0 && arr[r] < arr[r - 1]) r--;

  if (l === r && l !== 0 && r !== n - 1) return true;
  return false;
}
```
