# 253. 会议室 II

> 难度：中等
>
> https://leetcode.cn/problems/meeting-rooms-ii/

## 题目

给你一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，返回 所需会议室的最小数量 。

**示例 1**

```
输入：intervals = [[0,30],[5,10],[15,20]]
输出：2
```

**示例 2**

```
输入：intervals = [[7,10],[2,4]]
输出：1
```

## 解答

```typescript
/**
 * 模拟上车下车
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param intervals {number[][]}
 * @returns {number}
 */
export function minMeetingRooms(intervals: number[][]): number {
  const n = intervals.length;
  const bus: number[][] = [];
  for (let i = 0; i < n; i++) {
    // 上车
    bus.push([intervals[i][0], 1]);
    // 下车
    bus.push([intervals[i][1], -1]);
  }
  // 按时间升序，时间相同先下车再上车
  bus.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let people: number = 0;
  let maxPeople: number = 0;

  for (let i = 0; i < bus.length; i++) {
    people += bus[i][1];
    maxPeople = Math.max(people, maxPeople);
  }

  return maxPeople;
}
```
