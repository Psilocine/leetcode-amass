# 1184. 公交站间的距离

> 难度：简单
>
> https://leetcode.cn/problems/distance-between-bus-stops/

## 题目

环形公交路线上有  n  个站，按次序从  0  到  n - 1  进行编号。我们已知每一对相邻公交站之间的距离，distance[i]  表示编号为  i  的车站和编号为  (i + 1) % n  的车站之间的距离。

环线上的公交车都可以按顺时针和逆时针的方向行驶。

返回乘客从出发点  start  到目的地  destination  之间的最短距离。

**示例 1**

![image](https://user-images.githubusercontent.com/25545052/180642143-69c1dc71-df4d-44aa-b157-bda643bb3911.png)

```
输入：distance = [1,2,3,4], start = 0, destination = 1
输出：1
解释：公交站 0 和 1 之间的距离是 1 或 9，最小值是 1。
```

**示例 2**

![image](https://user-images.githubusercontent.com/25545052/180642148-80d5c6a0-16cc-43ca-9bd4-789777215087.png)

```
输入：distance = [1,2,3,4], start = 0, destination = 2
输出：3
解释：公交站 0 和 2 之间的距离是 3 或 7，最小值是 3。
```

**示例 3**

![image](https://user-images.githubusercontent.com/25545052/180642144-c39ef78d-c666-41ec-8ae6-899959d564cd.png)

```
输入：distance = [1,2,3,4], start = 0, destination = 3
输出：4
解释：公交站 0 和 3 之间的距离是 6 或 4，最小值是 4。
```

提示：

- 1 <= n <= 10^4
- distance.length == n
- 0 <= start, destination < n
- 0 <= distance[i] <= 10^4

## 解答

```typescript
/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param distance {number[]}
 * @param start {number}
 * @param destination {number}
 * @returns {number}
 */
export function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number
): number {
  if (destination < start) {
    [start, destination] = [destination, start];
  }

  // 顺时针
  const clockwise = distance.slice(start, destination);
  // 逆时针
  let anticlockwise = distance.slice(destination);
  if (start !== 0) {
    anticlockwise.unshift(...distance.slice(0, start));
  }

  const clockwiseSum = clockwise.reduce((v, p) => v + p, 0);

  const anticlockwiseSum = anticlockwise.reduce((v, p) => v + p, 0);

  return clockwiseSum > anticlockwiseSum ? anticlockwiseSum : clockwiseSum;
}

/**
 * 模拟 - 优化空间
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param distance {number[]}
 * @param start {number}
 * @param destination {number}
 * @returns {number}
 */
export function distanceBetweenBusStops2(
  distance: number[],
  start: number,
  destination: number
): number {
  if (destination < start) {
    [start, destination] = [destination, start];
  }
  let sum1 = 0,
    sum2 = 0;

  for (let i = 0; i < distance.length; i++) {
    if (i >= start && i < destination) {
      sum1 += distance[i];
    } else {
      sum2 += distance[i];
    }
  }

  return Math.min(sum1, sum2);
}
```
